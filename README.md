# Type Checking

In this assignment, you will implement a type checker for IFC (Information Flow Control) type checking, as discussed in class. You will again work with programs written in a simplified version of JavaScript, extended with the `type(var, typename)` and `hasseedge(typename1, typename2)` keywords. The parser is already provided with the codebase, so you do not need to worry about it.


## Running and testing

This code again features a test bench, which you may run in the same fashion
with `stack`. The tests aim to direct you through to code base of this
assignment and we strongly suggest you follow this!

```
$ stack test
```

This assignment also features an executable which you can run with the following
command.

```
$ stack run -- -f <path-to-file>
```

This will run the type checker on a single file. Again, you are allowed to modify `Main` if you wish to get more debug information.

## Assignment

In this assignment, you will implement the type checking semantics discussed in lectures 10 and 11. The task is divided into three parts:

## Part 1: Basic IFC Type Checking
   - In part 1, you will implement IFC type checking for the simplest case, where there are no functions and no arrays.
   - Your task is to fill in the following functions:
     - `typeExp`
     - `typeLogic`
     - `typeStmt`
   - These functions are located in the `SimpleTypeCheck.hs` file.
   - You must follow the IFC semantics given in lectures 10 and 11.

## Part 2: Type Checking with Arrays and Timing Considerations
   - In the second part, you will extend the type checker to handle programs with arrays.
   - You will consider the scenario where the attacker can time the program execution. In other words, it is not allowed to have:
     - Secret array indices
     - Secret branch conditions
   - You will again modify the following functions located in the `CacheTypeCheck.hs` file:
     - `typeExp`
     - `typeLogic`
     - `typeStmt`
   - You must follow the IFC semantics with cache and arrays given in lectures 10 and 11. Ignore speculative execution.

### Verifying Crypto Functions
   - If you completed part 2, your IFC type checker must be capable of verifying actual cryptographic library implementations! We presented some realistic tests in `programs/cache/cryptopos` and `programs/cache/cryptoneg`. Your type checker should also be capable of checking if those crypto primitives have information flow violations.



## Part 3: Type Checking with Arrays and Functions. No Timing Considerations.
   - In this final part, you will extend the basic IFC type checker to handle programs with arrays and functions.
     - For simplicity, we only consider non-recursive functions. Like the Nano syntax covered in class, functions can only have a single return statement, and that return statement must be at the end of the function.
     - As you know, lectures 10 and 11 don't cover the type checking semantics for arrays without caches and timing. The same goes for functions. You’ll need to figure out the semantics yourself, ensuring they prevent any direct or indirect information flow from a secret variable to a public one. 
      - In practice, we expect you to verify the positive test cases, and reject the negative test cases found in `programs/simplearrfunc`. In other words, we will award you the grade you received in `stack test`. However, if you believe you found a better type checking system that accepts some of the actually secure negative cases in our tests, send us an email and we will still give you full points.
   - You will again modify the following functions located in the `SimpleTypeCheckArrayFunc.hs` file:
     - `typeExp`
     - `typeLogic`
     - `typeStmt`

### Verifying Crypto Functions
   - If you completed part 3, your IFC type checker must be capable of verifying the same actual cryptographic library implementations you verified (or rejected) in part 2! We presented some more realistic tests in `programs/simplearrfunc/cryptopos`. As a final test of part 3, your type checker should also be capable of accepting the afaromentioned cryptographic primitives.

## Part 3.5: More complex security level lattices
   - For the first three parts, it is ok if you assumed you always deal with security lattices of the form `PUB <= SEC`. In other words, only two security levels. In reality you can have more complex security level structures. The testcase `program/simplearrfunc/pos/func7.js` checks if your type checker also works if you have more than 2 security levels. If you want to be awarded 10, you also have to verify `program/simplearrfunc/pos/func7.js`. Otherwise you can only receive a 9.9
## Grading


Your final grade corresponds directly to the one awarded to you by the test
infrastructure. Make sure your submission is correctly executed in our online
environment.

If there are issues with the submission system, don't panic! We will handle this
on a case-by-case basis.

If your uploaded submission somehow fail tests that work locally, ping
us and we will have a look!

If the online environment suddenly fails to work moments before the deadline,
don't hesitate to send us your submission through different means (e.g. email).

## Plagiarism

We have a strict zero-tolerance policy against plagiarism. Please, refrain from copying 
and/or sharing your code with other groups.

Since this is a group assignment, we expect that most of you will work together
via Git. Do make sure to make your repository **private**! Sharing your code in
this manner is plagiarism, even if unintentional.

## Warning

This is the first time we are publishing this assignment. If you encounter any problems, please send us an email or, if the issue does not involve your implementation, consider posting on Canvas.
