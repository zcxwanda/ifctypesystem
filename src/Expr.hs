-- This module includes the datatypes for expressions. DO NOT EDIT THIS FILE.


module Expr
  ( DeBruijn (..)
  , Expr (..)
  , BinOp (..)
  , Pred (..)
  ) where


data DeBruijn a = a :@ Int
  deriving (Eq, Ord, Show, Functor, Foldable, Traversable)

-- | Binary expression operations.
data BinOp
  = Add
  -- ^ Addition
  | Sub
  -- ^ Subtraction
  | Mul
  -- ^ Multiplication
  | Div
  -- ^ Division
  | Mod
  -- ^ Remainder
  | LShift
  -- ^ Bitshift left
  | RShiftSign
  -- ^ Bitshift right sign extend
  | RShiftZero
  -- ^ Bitshift right zero extend
  | BitOr
  -- ^ Bitwise or
  | BitAnd
  -- ^ Bitwise and
  | BitXor
  -- ^ Bitwise xor
  deriving (Eq, Ord, Show)

-- | Expressions are either of type integer or array
data Expr a
  = Var !(DeBruijn a)
  -- ^ A variable
  | Const !Integer
  -- ^ An integer constant
  | BinOp !BinOp !(Expr a) !(Expr a)
  -- ^ A binary operation over expressions
  | Select !(Expr a) !(Expr a)
  -- ^ Selects a value out of an array at the given index
  --
  -- select :: array -> index -> value
  | Store !(Expr a) !(Expr a) !(Expr a)
  -- ^ Stores a value at the given index of an array, returing the modified
  -- version.
  --
  -- store :: array -> index -> value -> array
  deriving (Eq, Ord, Show, Functor, Foldable, Traversable)



-- | Predicates are of type boolean
data Pred a
  = !(Expr a) :==: !(Expr a)
  -- ^ Equals
  | !(Expr a) :>=: !(Expr a)
  -- ^ Greater than or equals
  deriving (Eq, Ord, Show, Functor, Foldable, Traversable)
