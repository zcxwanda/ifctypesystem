-- Simple Typechecking. You do not have to handle function calls nor arrays.
module SimpleTypeCheck
  ( typeProg,
  )
where

-- import Lang

import Expr
import Lattice
import Logic
import Nano
import Prelude

-- The 'typeExp' function determines the security level of a given expression.
-- It takes three inputs: a lattice structure, an environment, and an expression.
-- The function returns the security level of the entire expression.
--
-- For example, 'typeExp' applied to `sec + obs` returns `sec`.
-- To find the security level of a variable, use the 'get' function.

-- Security levels, represented as strings, can be manipulated using lattice functions.

-- You can compare two security levels using the 'lte' (less than or equal) function of a lattice.
-- If 'lat' is a lattice, '(lte lat)' provides the less than or equal function.
-- For instance, `(lte lat) "sec" "obs"` would evaluate to `False`.
--
-- Likewise, you can use the 'join' function to determine the join
-- of two security levels. You can access the join function with '(lat join)'.

-- For instance, `(join lat) "sec" "obs"` would evaluate to "sec"
typeExp :: Lattice String -> Env String -> Expr String -> String
typeExp lat env e = case e of
  Const _ -> smallest lat
  Var (v :@ _) -> case Just (get env v) of
    Just level -> level
    Nothing -> error $ "Variable " ++ v ++ " not found."
  BinOp op a b -> join lat (typeExp lat env a) (typeExp lat env b)
  Select {} -> error "No arrays in SimpleTypeCheck"
  Store {} -> error "No Store expressions in this assignment"

-- typeLogic is analogous to typeExpr
typeLogic :: Lattice String -> Env String -> Logic String -> String
typeLogic lat env e = case e of
  Neg l -> typeLogic lat env l
  And ls -> foldr1 (join lat) (map (typeLogic lat env) ls)
  Pred (a :==: b) -> join lat (typeExp lat env a) (typeExp lat env b)
  Pred (a :>=: b) -> join lat (typeExp lat env a) (typeExp lat env b)
  Forall _ _ -> error "We won't deal with Forall"

-- typeStmt takes a lattice structure, a program counter, an environment, the whole Nano program, and a statement
-- Returns whether the statement typechecks
type Pc = String

typeStmt :: Lattice String -> Pc -> Env String -> Statement String -> Bool
typeStmt lat pc env s = case s of
  Return _ -> True
  Assign v e ->
    let level_e = typeExp lat env e
        level_join = join lat pc level_e
     in if lte lat level_join (get env v)
          then True
          else False
  If l st sf ->
    let level = typeLogic lat env l
        pc' = join lat pc level
     in typeStmt lat pc' env st && typeStmt lat pc' env sf
  While l st ->
    let level = typeLogic lat env l
        pc' = join lat pc level
     in typeStmt lat pc' env st
  Seq ss -> all (typeStmt lat pc env) ss
  ArrAsn {} -> error "No arrays in SimpleTypeCheck"
  AppAsn {} -> error "No function applications in SimpleTypeCheck"
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
             in typeStmt lattice (smallest lattice) env body
        )
        realFunctions
