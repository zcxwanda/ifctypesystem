module CacheTypeCheckSpec
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
import qualified CacheTypeCheck

verify :: String -> IO Bool
verify file = do
  prog <- Parse.nano file
  return $ CacheTypeCheck.typeProg $ fromJust prog

getPrograms :: FilePath -> RubricM () [FilePath]
getPrograms = lift . runIO . listDirectory

rubric :: Rubric
rubric = do
  -- This tracks whether the verifier is completely correct. Tests that rely
  -- on a correct verifier can fail by checking this value. Note that the
  -- ordering of the tests is important here!
  -- This tracks whether the cache type checker is completely correct
  -- We first run simple tests, and then proceed to verify some cypto primitives
  correctVerifier <- lift . runIO . newIORef $ True


  let getPrograms' dir = fmap (dir <>) <$> getPrograms dir
  let check b f = dpasses f $ do
        valid <- verify f `catch` \(_ :: SomeException) -> do
          return $ not b
        when (valid /= b) $ do
          writeIORef correctVerifier False
        valid @?= b

  criterion "rejects negative files" 0.2 . distribute $ do
    let dir = "programs/cache/neg/"
    neg <- getPrograms' dir

    mapM_ (check False) neg

  criterion "rejects the simple negative files" 0.1 . distribute $ do
    let dir = "programs/simple/neg/"
    neg <- getPrograms' dir

    mapM_ (check False) neg
    
  criterion "accepts positive files" 0.2 . distribute $ do
    let dir = "programs/cache/pos/"
    pos <- getPrograms' dir

    mapM_ (check True) pos

  criterion "accepts secure crypto files" 0.25 . distribute $ do
    let dir = "programs/cache/cryptopos/"
    pos <- getPrograms' dir

    mapM_ (check True) pos
  criterion "rejects non-constant time crypto files" 0.25 . distribute $ do
          let dir = "programs/cache/cryptoneg/"
          neg <- getPrograms' dir

          mapM_ (check False) neg