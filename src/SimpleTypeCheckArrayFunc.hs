module SimpleTypeCheckArrayFunc where
import Prelude
-- import Lang

import Nano
import Expr
import Logic
import Lattice
import Data.Foldable (find)
import Data.Maybe (fromMaybe, fromJust)

type Pc = String

-- `typeExp` takes a lattice structure, an environment, and an expression as inputs.
typeExp :: Lattice String -> Env String -> Expr String -> String
typeExp lat env e = case e of 
    Const _          -> smallest lat
    Var (n :@ _)     -> undefined
    BinOp _ a b      -> undefined
    Select arr index -> undefined
    Store {}         -> error "No Store expressions in this assignment"

-- typeLogic is analogous to typeExpr
typeLogic :: Lattice String -> Env String -> Logic String -> String
typeLogic lat env e = case e of 
    Pred (a :==: b) -> undefined
    Pred (a :>=: b) -> undefined
    And ls          -> undefined
    Neg l           -> undefined
    Forall _ _      -> error "We won't deal with Forall"


-- typeStmt takes a lattice structure, a program counter, an environment, the whole Nano program, and a statement
-- Returns whether the statement typechecks
-- Unlike in the simple case, typeStmt also takes the whole Nano program as input
-- Notice that we store function return values as a singleton list. This is a bit hacky, but should be easy to use
-- If you are curious about how we parse return statements, refer to Expr.hs
typeStmt :: Lattice String -> Pc -> Env String -> Nano String -> Statement String -> Bool
typeStmt lat pc env prog s = case s of
    Return _              -> True
    Seq ss                -> undefined
    If l st sf            -> undefined
    While l st            -> undefined
    Assign v e            -> undefined
    ArrAsn arr index val  -> undefined
    AppAsn var fname args -> undefined
    Assert _              -> error "No assertions in this assignment"
    Assume _              -> error "No assumptions in this assignment"

-- A convenience function that, given a function name, returns the corresponding function.
-- You may want to use that while writing typeStmt
getFunction :: Nano String -> String -> Function String
getFunction prog funcname = fromJust $ find (\x -> fname x == funcname) prog


typeProg :: Nano String -> Bool
typeProg prog = 
    let lattice = getLattice (getHasse prog)
        realFunctions = filter (\x -> fname x /= "hasse") prog
    in all (\f -> 
            let body = fbody f
                env = convertToEnv (ftypes f) in 
                typeStmt lattice (smallest lattice) env prog body) realFunctions

