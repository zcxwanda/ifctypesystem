module SimpleTypeCheckSpec
  ( rubric
  ) where

import System.Directory (listDirectory)
import Data.IORef

import Test.Hspec
import Test.HUnit
import Test.Hrubric

import Data.Maybe (fromJust)
import Control.Monad.Trans (lift)
import Control.Monad (when)
import Control.Exception (catch, SomeException)

import qualified Parse
import qualified SimpleTypeCheck

verify :: String -> IO Bool
verify file = do
  prog <- Parse.nano file
  return $ SimpleTypeCheck.typeProg $ fromJust prog

getPrograms :: FilePath -> RubricM () [FilePath]
getPrograms = lift . runIO . listDirectory

rubric :: Rubric
rubric = do

  correctVerifier <- lift . runIO . newIORef $ True

  criterion "Simple type checking without arrays and functions" 1 $ do
    bcriterion "simplest" 1.0 0.5 $ do
      let getPrograms' dir = fmap (dir <>) <$> getPrograms dir
      let check b f = dpasses f $ do
            valid <- verify f `catch` \(_ :: SomeException) -> do
              return $ not b
            when (valid /= b) $ do
              writeIORef correctVerifier False
            valid @?= b

      criterion "rejects negative files" 0.5 . distribute $ do
        let dir = "programs/simple/neg/"
        neg <- getPrograms' dir

        mapM_ (check False) neg

      criterion "accepts positive files" 0.5 . distribute $ do
        let dir = "programs/simple/pos/"
        pos <- getPrograms' dir

        mapM_ (check True) pos

