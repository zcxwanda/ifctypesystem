-- Typechecking, but with we assume the attacker can time cache access times.
-- Do not handle function calls.
-- You may assume there are only two security (low <= high)

module CacheTypeCheck where

import Expr
import Lattice
import Logic
import Nano
import Prelude

-- `typeExp` takes a lattice structure, an environment, and an expression as inputs.
-- Unlike the simpler case, `typeExp` returns a `(Bool, String)`.
-- The boolean indicates whether the expression passes type checking.
-- As you know, when caches are involved, some expressions might fail to type check
typeExp :: Lattice String -> Env String -> Expr String -> (Bool, String)
typeExp lat env e = case e of
  Const _ -> (True, smallest lat)
  Var (v :@ _) -> case Just (get env v) of
    Just level -> (True, level)
    Nothing -> (False, "Variable " ++ v ++ " not found.")
  BinOp op a b ->
    let (validA, levelA) = typeExp lat env a
        (validB, levelB) = typeExp lat env b
     in (validA && validB, join lat levelA levelB)
  Select {} -> (False, "No arrays in CacheTypeCheck")
  Store {} -> error "No Store expressions in this assignment"

-- typeLogic is analogous to typeExpr
typeLogic :: Lattice String -> Env String -> Logic String -> (Bool, String)
typeLogic lat env e = case e of
  Pred (a :==: b) ->
    let (validA, levelA) = typeExp lat env a
        (validB, levelB) = typeExp lat env b
     in (validA && validB, join lat levelA levelB)
  Pred (a :>=: b) ->
    let (validA, levelA) = typeExp lat env a
        (validB, levelB) = typeExp lat env b
     in (validA && validB, join lat levelA levelB)
  And ls ->
    let results = map (typeLogic lat env) ls
        valid = all fst results
        levels = map snd results
     in (valid, foldr1 (join lat) levels)
  Neg l -> typeLogic lat env l
  Forall {} -> error "We won't deal with Forall"

-- `typeStmt` takes a lattice structure, an environment, and a statement,
-- and returns a boolean indicating whether the statement passes type checking.
-- typeStmt :: Lattice String -> Env String -> Statement String -> Bool
-- typeStmt lat env s = case s of
--   Return _ -> True
--   Seq ss -> all (typeStmt lat env) ss
--   If l st sf ->
--     let (validL, levelL) = typeLogic lat env l
--      in validL && (typeStmt lat env st) && (typeStmt lat env sf)
--   While l st ->
--     let (validL, levelL) = typeLogic lat env l
--      in validL && typeStmt lat env st
--   Assign v e ->
--     let (validE, levelE) = typeExp lat env e
--         varLevel = Just (get env v)
--      in validE
--           && ( case varLevel of
--                  Just vLevel -> lte lat levelE vLevel
--                  Nothing -> False
--              )
--   ArrAsn arr index e ->
--     let (validIndex, levelIndex) = typeExp lat env index
--         (validE, levelE) = typeExp lat env e
--         arrLevel = get env arr
--      in validIndex && validE && lte lat levelIndex arrLevel && lte lat levelE arrLevel
--   AppAsn {} -> error "No function applications in CacheTypeCheck"
--   Assert _ -> error "No assertions in this assignment"
--   Assume _ -> error "No assumptions in this assignment"
type Pc = String

typeStmt :: Lattice String -> Pc -> Env String -> Statement String -> Bool
typeStmt lat pc env s = case s of
  Return _ -> True
  Seq ss -> all (typeStmt lat pc env) ss
  If l st sf ->
    let (validL, levelL) = typeLogic lat env l
        pc' = join lat pc levelL
     in validL && (typeStmt lat pc' env st) && (typeStmt lat pc' env sf)
  While l st ->
    let (validL, levelL) = typeLogic lat env l
        pc' = join lat pc levelL
     in validL && typeStmt lat pc' env st
  Assign v e ->
    let (validE, levelE) = typeExp lat env e
        level_join = join lat pc levelE
        varLevel = get env v
     in validE && lte lat level_join varLevel
  ArrAsn arr index e ->
    let (validIndex, levelIndex) = typeExp lat env index
        (validE, levelE) = typeExp lat env e
        level_join_index = join lat pc levelIndex
        level_join_e = join lat pc levelE
        arrLevel = get env arr
     in validIndex && validE && lte lat level_join_index arrLevel && lte lat level_join_e arrLevel
  AppAsn {} -> error "No function applications in CacheTypeCheck"
  Assert _ -> error "No assertions in this assignment"
  Assume _ -> error "No assumptions in this assignment"

typeProg :: Nano String -> Bool
typeProg prog =
  let lattice = getLattice (getHasse prog)
      realFunctions = filter (\x -> fname x /= "hasse") prog
   in all
        ( \f ->
            let body = fbody f
                env = convertToEnv (ftypes f)
                pc = smallest lattice
             in typeStmt lattice pc env body
        )
        realFunctions
