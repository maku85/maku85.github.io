---
date: 2021-01-06T09:00:00.000Z
title: Funtional Programming in Javascript
description: Write easily understandable code for humans
img: https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60
tags: javascript
published: false
---

Functional Programming is a declarative programming paradigm where you mostly construct and structure your code using functions. It doesn’t allow any mutation nor shared state, as functions should remain pure and true to their expression under this paradigm.
Benefits of FP are:

- doesn’t have side-effects and it’s immutable
- it’s clean, straightforward and succinct

### First Class Functions

FP functions are first-class citizens: you can always insert functions inside a function without any restrictions present.

### Higher-order functions

A higher-order function is a function that gets a function as an argument. It may or may not return a function as its resulting output.

```javascript
function greaterThan(n) {
  return (x) => x > n
}
let greaterThanTwo = greaterThan(2)
console.log(greaterThanTwo(5))
```

### Pure functions

Functional programming encourages you to write pure functions. A pure function must satisfy both of the following properties:

- Referential transparency: The function always gives the same return value for the same arguments. This means that the function cannot depend on any mutable state.
- Side-effect free: The function cannot cause any side effects. Side effects may include I/O (e.g., writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.

There are several benefits to pure functions:

- They're easier to reason about and debug because they don't depend on mutable state.
- The return value can be cached or "memoized" to avoid recomputing it in the future.
- They're easier to test because there are no dependencies (such as logging, Ajax, database, etc.) that need to be mocked.

### Immutability

One of the killer benefits of using Functional Programming is its ability to not show any side-effects in the code. It reduces the likelihood that the code will introduce some bugs since it’s not going to mutate and the bug is easy to spot since it’s within the scope of the function. Once a variable has a value assigned to it, it is no longer subject to change.

### Function composition

Function Composition is an act of composing/creating functions that allow you to further simplify and compress your functions by taking functions as an argument and return an output. It may also return another function as its output other than numerical/string values.

```javascript
var compose = (f, g) => (x) => f(g(x))
```

There is also a variation in the way we compose functions by the name of Monads. Monads are just another variation of Function Composition wherein it requires a context in addition to its output. Monads can type lift, flatten, and map so that it can make functions composable.

### Recursion

### Currying

Informally, currying is the process of taking a function that accepts n arguments and turning it into n functions that each accepts a single argument. The arity of a function is the number of arguments that it accepts. A function that accepts a single argument is unary, two arguments binary, three arguments ternary, and n arguments is n-ary. Therefore, we can define currying as the process of taking an n-ary function and turning it into n unary functions.
