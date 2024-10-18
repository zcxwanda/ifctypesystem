import Test.Hspec
import Test.Hrubric
import Test.HUnit

import Control.Monad
import Control.Monad.Trans.Maybe
import Grade


import qualified LatticeSpec
import qualified SimpleTypeCheckSpec
import qualified SimpleTypeCheckArrayFuncSpec
import qualified CacheTypeCheckSpec
rubric :: Rubric
rubric = do
  criterion "It compiles" (1/10) LatticeSpec.rubric
  criterion "Simple type checking" (2/10) SimpleTypeCheckSpec.rubric
  criterion "Cache type checking" (3/10) CacheTypeCheckSpec.rubric
  criterion "Simple type checking with arrays and function" (4/10) SimpleTypeCheckArrayFuncSpec.rubric

main :: IO ()
main = void . runMaybeT $ do
  result <- MaybeT $ hrubric rubric
  pretty result
  autograde result
