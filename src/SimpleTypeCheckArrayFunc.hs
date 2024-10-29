module SimpleTypeCheckArrayFunc where

-- import Lang

import Data.Foldable (find)
import Data.Maybe (fromJust, fromMaybe)
import Expr
import Lattice
import Logic
import Nano
import Prelude

type Pc = String

-- `typeExp` takes a lattice structure, an environment, and an expression as inputs.
typeExp :: Lattice String -> Env String -> Expr String -> String
typeExp lat env e = case e of
  Const _ -> smallest lat
  Var (n :@ _) -> fromMaybe (error $ "Variable not found: " ++ n) (Just (get env n))
  BinOp _ a b ->
    let typeA = typeExp lat env a
        typeB = typeExp lat env b
     in if typeA == typeB
          then typeA
          else typeB
  Select arr index ->
    let arrType = typeExp lat env arr
        indexType = typeExp lat env index
     in if indexType == "sec"
          then indexType
          else arrType
  Store {} -> error "No Store expressions in this assignment"

-- typeLogic is analogous to typeExpr
typeLogic :: Lattice String -> Env String -> Logic String -> String
typeLogic lat env e = case e of
  Pred (a :==: b) ->
    let levelA = typeExp lat env a
        levelB = typeExp lat env b
     in if levelA == levelB
          then levelA
          else levelA
  Pred (a :>=: b) ->
    let levelA = typeExp lat env a
        levelB = typeExp lat env b
     in if levelA == levelB
          then levelA
          else levelB
  And ls ->
    let levels = map (typeLogic lat env) ls
     in if all (== head levels) levels
          then head levels
          else error "Incompatible levels in conjunction"
  Neg l ->
    let levelL = typeLogic lat env l
     in levelL
  Forall _ _ -> error "We won't deal with Forall"

-- typeStmt takes a lattice structure, a program counter, an environment, the whole Nano program, and a statement
-- Returns whether the statement typechecks
-- Unlike in the simple case, typeStmt also takes the whole Nano program as input
-- Notice that we store function return values as a singleton list. This is a bit hacky, but should be easy to use
-- If you are curious about how we parse return statements, refer to Expr.hs
typeStmt :: Lattice String -> Pc -> Env String -> Nano String -> Statement String -> Bool
typeStmt lat pc env prog s = case s of
  Return _ -> True
  Seq ss -> all (typeStmt lat pc env prog) ss
  If l st sf ->
    let level = typeLogic lat env l
        pc' = join lat pc level
     in typeStmt lat pc' env prog st && typeStmt lat pc' env prog sf
  While l st ->
    let level = typeLogic lat env l
        pc' = join lat pc level
     in typeStmt lat pc' env prog st
  Assign v e ->
    let eType = typeExp lat env e
        level_join = join lat pc eType
     in lte lat level_join (get env v)
  ArrAsn arr index val ->
    let arrType = get env arr
        indexType = typeExp lat env index
        valType = typeExp lat env val
        level_join_index = join lat pc indexType
        level_join_val = join lat pc valType
     in lte lat level_join_index arrType && lte lat level_join_val arrType
  AppAsn var fname args ->
    let func = getFunction prog fname
        argTypes = map (typeExp lat env) args
        expectedTypes = map (\(var, typ) -> typ) (ftypes func)
        argsValid = all id $ zipWith (\argType expectedType -> lte lat argType expectedType) argTypes expectedTypes
     in argsValid
  Assert _ -> error "No assertions in this assignment"
  Assume _ -> error "No assumptions in this assignment"

-- A convenience function that, given a function name, returns the corresponding function.
-- You may want to use that while writing typeStmt
getFunction :: Nano String -> String -> Function String
getFunction prog funcname = fromJust $ find (\x -> fname x == funcname) prog

typeProg :: Nano String -> Bool
typeProg prog =
  let lattice = getLattice (getHasse prog)
      realFunctions = filter (\x -> fname x /= "hasse") prog
   in all
        ( \f ->
            let body = fbody f
                env = convertToEnv (ftypes f)
             in typeStmt lattice (smallest lattice) env prog body
        )
        realFunctions
