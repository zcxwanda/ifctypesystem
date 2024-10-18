-- Simple Typechecking. You do not have to handle function calls nor arrays. 
module SimpleTypeCheck
  ( typeProg
  ) where
import Prelude
-- import Lang

import Nano
import Expr
import Logic
import Lattice

-- `typeExp` takes a lattice structure, an environment, and an expression as inputs.
typeExp :: Lattice String -> Env String -> Expr String -> String
typeExp lat env e = case e of 
         Const _ -> smallest lat
         _ -> undefined


-- typeLogic is analogous to typeExpr
typeLogic :: Lattice String -> Env String -> Logic String -> String
typeLogic lat env e = case e of
        Neg l -> typeLogic lat env l
        _ -> undefined


-- typeStmt takes a lattice structure, a program counter, an environment, the whole Nano program, and a statement
-- Returns whether the statement typechecks
type Pc = String
typeStmt :: Lattice String -> Pc -> Env String -> Statement String -> Bool
typeStmt lat pc env s = case s of
        Return _ -> True
        _ -> undefined

    
typeProg :: Nano String -> Bool
typeProg prog = 
    let lattice = getLattice (getHasse prog)
        realFunctions = filter (\x -> fname x /= "hasse") prog
    in all (\f -> 
            let body = fbody f
                env = convertToEnv (ftypes f) in 
                typeStmt lattice (smallest lattice) env body) realFunctions
