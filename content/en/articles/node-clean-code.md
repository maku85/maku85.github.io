---
title: Clean code in Node.js
tags:
  - javascript
  - nodejs
published: true
---

Clean code is an important aspect of software development, as it makes the code more readable, maintainable, and scalable.

<!--more-->

## Key principles

- **Separation of concerns**: Each layer of the application should have a single responsibility
- **Dependency inversion**: High-level modules should not depend on low-level modules. Instead, both should depend on abstractions
- **Testability**: The code should be designed in a way that makes it easy to write automated tests

## General best practices

### Variables

- use intention-revealing names and don’t worry if you have long variable names

```js
// bad
const a = 1;
const b = 2;
const c = a + b;

// good
const firstNumber = 1;
const secondNumber = 2;
const sum = firstNumber + secondNumber;
```

- make meaningful distinctions and don’t add extra, unnecessary nouns to the variable names

```js
// bad
const car = {
  carMake: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue',
};

// good
const car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue',
};
```

- make your variable names easy to pronounce

```js
// bad
const genymdhms = moment().format('YYYY/MM/DD/hh/mm/ss');

// good
const generationTimestamp = moment().format('YYYY/MM/DD/hh/mm/ss');
```

### Functions

- a function should do one thing only on one level of abstraction
- use long, descriptive names, a function name should be a verb or a verb phrase, and it needs to communicate its intent, as well as the order and intent of the arguments

```js
// bad
function getCustomer(id) {
  // ...
}

// good
function getCustomerById(id) {
  // ...
}
```

- avoid long argument list, use a single object parameter and destructuring assignment instead

```js
// bad
function createCustomer(name, address, city, state, zipCode) {
  // ...
}

// good
function createCustomer({ name, address, city, state, zipCode }) {
  // ...
}
```

- use pure functions and reduce side effects

```js
// bad
const name = 'John Doe';
function greet() {
  console.log(`Hello, ${name}!`);
}

// good
function greet(name) {
  return `Hello, ${name}!`;
}
```

- organize your functions in a file according to the stepdown rule, higher level functions should be on top and lower levels below. It makes it natural to read the source code
- functions should either do something (modify) or answer something (query), but not both
- use promises or async/await instead of callbacks for asynchronous operations

```js
// bad
function getUser(id, callback) {
  User.findById(id, function (err, user) {
    if (err) {
      callback(err);
    } else {
      callback(null, user);
    }
  });
}

// good
async function getUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw err;
  }
}
```

### Other best practices

- use comments to explain complex code or to provide context
- use error handling to gracefully handle errors and avoid crashing the application
- use a consistent coding style and formatting

## Code organization

To implement Clean Architecture in Node.js, the application can be divided into layers, with each layer having a specific responsibility following these steps:

- define the layers of the application
- define the interfaces between the layers
- implement the layers, starting from the innermost layer and working outwards
- test each layer independently
- use dependency injection to ensure that each layer depends only on abstractions, not on concrete implementations

For example, the application can be divided into the following layers:

- Presentation layer: Handles user input and output
- Application layer: Contains the business logic of the application
  - Routes: register routes and redirect incoming request to its respective controller
  - Controller: handle incoming request, validate request body and send response to client
  - Service: handle business logic
  - Repository: handle database operations
  - Database: encapsulate all DB queries and expose it with a single interface
- Domain layer: Contains the core business logic and entities of the application
- Infrastructure layer: Contains the implementation details of the application, such as the database and external APIs

By separating the application into layers, each layer can be tested independently, and changes to one layer do not affect the other layers.
