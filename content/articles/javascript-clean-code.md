---
date: 2020-12-11T09:00:00.000Z
title: Javascript clean code
description: Write easily understandable code for humans
img: https://images.unsplash.com/photo-1534190239940-9ba8944ea261?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80
tags: javascript
published: false
---

### Variables

- use meaningful, explanatory, pronounceable and searchable variable names
- make meaningful distinctions and don't add extra, unnecessary nouns to the variable names
- avoid mental mapping
- use default arguments

### Functions

- a function name should be a verb or a verb phrase, and it needs to communicate its intent, as well as the order and intent of the arguments
- avoid long argument list. Use 2 or 3 arguments or a single object parameter and destructuring assignment instead
- functions should do one thing only on one level of abstraction. Don't use flags as function parameters because flags tell your user that this function does more than one thing
- use pure functions without side effects, whenever you can
- organize your functions in a file according to the stepdown rule. Higher level functions should be on top and lower levels below. It makes it natural to read the source code.
- functions should either do something (modify) or answer something (query), but not both.
- encapsulate conditionals and avoid negative conditionals or, if possible, avoid conditionals (the solution, in many cases, is polymorphism)
- avoid type-checking
- remove duplicate and dead code

### Objects and Data Structures

- use getters and setters
- make objects have private members (with closures)

### Classes

- prefer ES2015/ES6 classes over ES5 plain functions
- use method chaining
- prefer composition over inheritance

### SOLID

- Single Responsibility Principle (SRP) - There should never be more than one reason for a class to change
- Open/Closed Principle (OCP) - software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
- Liskov Substitution Principle (LSP) - If S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e., objects of type S may substitute objects of type T) without altering any of the desirable properties of that program
- Interface Segregation Principle (ISP) - Clients should not be forced to depend upon interfaces that they do not use
- Dependency Inversion Principle (DIP) - High-level modules should not depend on low-level modules. Both should depend on abstractions - Abstractions should not depend upon details. Details should depend on abstractions.

### Concurrency

- Use Promises, not callbacks
- Async/Await are even cleaner than Promises

### Error Handling

- don't ignore caught errors
- don't ignore rejected promises

### Formatting

- use consistent capitalization
- function callers and callees should be close

### Comments

- only comment things that have business logic complexity.
- don't leave commented out code in your codebase
- don't have journal comments
- avoid positional markers
