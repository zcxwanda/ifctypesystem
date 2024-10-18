-- Typechecking, but with we assume the attacker can time cache access times. 
-- Do not handle function calls.
-- You may assume there are only two security (low <= high)

module CacheTypeCheck where
import Prelude

import Nano
import Expr
import Logic
import Lattice

-- `typeExp` takes a lattice structure, an environment, and an expression as inputs.
-- Unlike the simpler case, `typeExp` returns a `(Bool, String)`.
-- The boolean indicates whether the expression passes type checking.
-- As you know, when caches are involved, some expressions might fail to type check
typeExp :: Lattice String -> Env String -> Expr String -> (Bool,String)
typeExp lat env e = undefined

-- typeLogic is analogous to typeExpr
typeLogic :: Lattice String -> Env String -> Logic String -> (Bool, String)
typeLogic lat env l = undefined

-- `typeStmt` takes a lattice structure, an environment, and a statement, 
-- and returns a boolean indicating whether the statement passes type checking.
typeStmt :: Lattice String -> Env String -> Statement String -> Bool
typeStmt lat env s = undefined


-- The typeProg function, updated for clarity
typeProg :: Nano String -> Bool
typeProg prog = 
    let lattice = getLattice (getHasse prog)
        realFunctions = filter (\x -> fname x /= "hasse") prog
    in all (\f -> 
            let body = fbody f
                env = convertToEnv (ftypes f) in 
                typeStmt lattice env body) realFunctions
