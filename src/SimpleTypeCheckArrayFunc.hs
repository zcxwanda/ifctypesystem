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
    Var (n :@ _)     -> fromMaybe (error $ "Variable not found: " ++ n) (Just(get env n))
    BinOp _ a b      -> let typeA = typeExp lat env a
                            typeB = typeExp lat env b
                        in if typeA == typeB
                           then typeA
                           else typeB
    Select arr index -> let arrType = typeExp lat env arr
                            indexType = typeExp lat env index
                        in if indexType == "sec"
                           then indexType
                           else arrType
    Store {}         -> error "No Store expressions in this assignment"

-- typeLogic is analogous to typeExpr
typeLogic :: Lattice String -> Env String -> Logic String -> String
typeLogic lat env e = case e of 
    Pred (a :==: b) -> let levelA = typeExp lat env a
                           levelB = typeExp lat env b
                       in if levelA == levelB
                          then levelA
                       else error $ "Incompatible levels: " ++ levelA ++ " and " ++ levelB
    Pred (a :>=: b) -> let levelA = typeExp lat env a
                           levelB = typeExp lat env b
                       in if levelA == levelB
                          then levelA
                          else error $ "Incompatible levels: " ++ levelA ++ " and " ++ levelB
    And ls          -> let levels = map (typeLogic lat env) ls
                       in if all (== head levels) levels
                          then head levels  -- 所有逻辑表达式的安全级别相同
                          else error "Incompatible levels in conjunction"
    Neg l           -> let levelL = typeLogic lat env l
                       in levelL  -- 取反时保持原级别
    Forall _ _      -> error "We won't deal with Forall"


-- typeStmt takes a lattice structure, a program counter, an environment, the whole Nano program, and a statement
-- Returns whether the statement typechecks
-- Unlike in the simple case, typeStmt also takes the whole Nano program as input
-- Notice that we store function return values as a singleton list. This is a bit hacky, but should be easy to use
-- If you are curious about how we parse return statements, refer to Expr.hs
typeStmt :: Lattice String -> Pc -> Env String -> Nano String -> Statement String -> Bool
typeStmt lat pc env prog s = case s of
    Return _              -> True
    Seq ss                -> all (typeStmt lat pc env prog) ss
    If l st sf            -> typeStmt lat pc env prog st && typeStmt lat pc env prog sf
    While l st            -> typeStmt lat pc env prog st
    Assign v e            -> let eType = typeExp lat env e
                             in if eType == fromMaybe (error "Variable not found") (Just(get env v))
                                then True
                                else False
    ArrAsn arr index val  -> let arrType = get env arr
                                 indexType = typeExp lat env index
                                 valType = typeExp lat env val
                             in if indexType == "sec" && arrType == valType
                                then True
                                else False
    AppAsn var fname args -> let func = getFunction prog fname  -- 获取函数定义
                                 argTypes = map (typeExp lat env) args  -- 获取参数的类型
                                 expectedTypes = map fst (ftypes func)  -- 提取期望的参数类型
                                 checkArgs = zipWith (==) expectedTypes argTypes
                              in if all id checkArgs
                                 then True  -- 如果所有参数类型匹配，返回 True
                                 else False
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

