module LatticeSpec
  ( rubric
  ) where

import Test.Hspec
import Test.HUnit
import Test.Hrubric
import Control.Exception (evaluate)

import Lattice
import Data.List (sort)

rubric :: Rubric
rubric = do
  -- Define a simple Hasse diagram for testing
  let hasseDiagram = [("a", "b"), ("b", "c"), ("c", "d")]

  -- Test if Lattice can be created successfully without cycles
  criterion "lattice" (1/9) . passOrFail $ do
    it "creates a valid Lattice from a DAG" $ do
      let lattice = getLattice hasseDiagram
      join lattice "a" "b" @?= "b"
      meet lattice "c" "d" @?= "c"
      lte lattice "a" "b" @?= True
      lte lattice "b" "a" @?= False
      smallest lattice @?= "a"

  -- Test for cycle detection (invalid DAG)
  criterion "cycle detection" (1/9) . passOrFail $ do
    it "throws an error for cyclic graphs" $ do
      evaluate (getLattice [("a", "b"), ("b", "a")]) `shouldThrow` anyErrorCall

  -- Test reflexive transitive closure correctness
  criterion "reflexive transitive closure" (1/9) . passOrFail $ do
    it "computes the reflexive transitive closure" $ do
      let closure = reflexiveTransitive hasseDiagram
      sort closure @?= sort [("a", "a"), ("a", "b"), ("a", "c"), ("a", "d"),
                             ("b", "b"), ("b", "c"), ("b", "d"),
                             ("c", "c"), ("c", "d"), 
                             ("d", "d")]

  -- Test for isDAG function
  criterion "DAG check" (1/9) . passOrFail $ do
    it "correctly checks if a graph is a DAG" $ do
      isDAG hasseDiagram @?= True
      isDAG [("a", "b"), ("b", "a")] @?= False

  -- Test for smallest element in a more complex lattice
  criterion "smallest element" (1/9) . passOrFail $ do
    it "returns the smallest element from a more complex Hasse diagram" $ do
      let complexHasse = [("x", "y"), ("y", "z"), ("y", "w"), ("x", "w")]
      let lattice = getLattice complexHasse
      smallest lattice @?= "x"

  -- Test for join and meet in a non-trivial case
  criterion "join and meet" (1/9) . passOrFail $ do
    it "correctly computes the join and meet for non-trivial elements" $ do
      let complexHasse = [("x", "y"), ("y", "z"), ("y", "w"), ("x", "w")]
      let lattice = getLattice complexHasse
      join lattice "x" "y" @?= "y"
      meet lattice "z" "w" @?= "y"

  -- Test for broken diagrams (non-transitive relations)
  criterion "broken diagram (non-transitive)" (1/9) . passOrFail $ do
    it "throws an error when trying to compute a lattice from non-transitive relations" $ do
      evaluate (getLattice [("a", "b"), ("c", "d")]) `shouldThrow` anyErrorCall

  -- Test for disconnected graph (no connection between some elements)
  criterion "disconnected graph" (1/9) . passOrFail $ do
    it "throws an error for disconnected graphs" $ do
      evaluate (getLattice [("a", "b"), ("c", "d"), ("e", "f")]) `shouldThrow` anyErrorCall

  -- Test for complex lattice with multiple joins and meets
  criterion "complex join and meet" (1/9) . passOrFail $ do
    it "computes join and meet for multiple elements correctly" $ do
      let complexHasse = [("a", "b"), ("b", "c"), ("a", "d"), ("d", "c"), ("e", "c"),("a","e")]
      let lattice = getLattice complexHasse
      join lattice "a" "e" @?= "e"
      meet lattice "b" "d" @?= "a"
      join lattice "e" "d" @?= "c"
      meet lattice "e" "d" @?= "a"
      join lattice "a" "d" @?= "d"
      
      
