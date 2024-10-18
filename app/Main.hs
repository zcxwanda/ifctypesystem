module Main 
  ( main
  ) where

import System.Exit
import Config
import Parse
import SimpleTypeCheck

resultExit :: [Bool] -> ExitCode
resultExit rs | and rs = ExitSuccess
resultExit _ = ExitFailure 1

verify :: FilePath -> IO Bool
verify path = do
  prog <- nano path
  prog' <- maybe (fail "Unsupported Javascript in source") return prog
  -- valid <- check prog'
  let valid = typeProg prog'
  putStrLn $ "'" <> path <> "' is valid: " <> show valid
  return valid


main :: IO ()
main = do
  cfg <- readConfig
  rs <- mapM verify $ files cfg
  exitWith $ resultExit rs
