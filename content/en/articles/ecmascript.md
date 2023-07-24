---
title: ECMAScript (aka ES)
img: /ecmascript.webp
credits: Photo by <a href="https://unsplash.com/photos/cvBBO4PzWPg" target="_blank">Markus Spiske</a> on <a href="https://unsplash.com/" target="_blank">Unsplash</a>
tags:
  - javascript
  - ecmascript
published: true
---

ECMAScript is a standard for scripting languages, such as JavaScript, JScript, and ActionScript. It is standardized by the Ecma International standards organization in the ECMA-262 and ECMA-402 specifications. The ECMAScript specification is a standardized specification of a scripting language developed by Brendan Eich of Netscape; initially it was named Mocha, later LiveScript, and finally JavaScript.

<!--more-->

## ECMAScript 2022 aka ES13

ECMAScript 2022 is the 13th edition of the ECMAScript standard, it was released on June, 2022 and has been implemented by major web browsers.

### Top-level await

Now the await can be used at the top level of a module and can be super handy when initializing imports and creating fallbacks.

```js
import { get } from 'axios';

// the old behavior
(async () => {
  const response = await get('https://api.github.com/users/username');
  const data = await response.json();
})();

// the new behavior
const response = await get('https://api.github.com/users/username');
const data = await response.json();
```

### Private instance fields, methods, and accessors

With ES2022 was added as new features as private instance fields, methods, and accessors. We need to add just # at the beginning of the method name and in that way will be declared as private.

```js
class Person {
  // private field
  #name = 'John Doe';

  // private accessor
  get #alias() {
    return 'JD';
  }

  // private method
  #setName(name) {
    this.#name = name;
  }

  // public method
  getName() {
    return this.#name;
  }
}

const person = new Person();
console.log(person.getName()); // John Doe
console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
console.log(person.alias); // Ouput: undefined
person.setName('Jane Doe'); // Output: TypeError: person.setName is not a function
```

### Static class fields and methods

Static class fields and methods are not used on instances of a class. Instead, can be called on the class itself and is declared using the static keyword.

```javascript
class Person {
  // static field
  static name = 'John Doe';

  // static method
  static getName() {
    return this.name;
  }
}

console.log(Person.name); // John Doe
console.log(Person.getName()); // John Doe
```

### Static class initialization blocks

This new feature provides a mechanism for additional static initialization during class definition evaluation.

```javascript
class Person {
  static name;

  static {
    this.name = 'John Doe';
  }

  static getName() {
    return this.name;
  }
}

console.log(Person.getName()); // John Doe
```

### Error: .cause

Error and its subclasses now let us specify the reason behind the error. With the Error cause, we can add more intrinsic information for our errors. To use this new feature, we should specify the error options as a second parameter, and with the cause key we can pass the error that we want to chain.

```javascript
const error = new Error('Error message', { cause: new Error('Cause message') });
console.log(error.cause); // Error: Cause message
```

### Array, String, and TypedArray: .at() Method

The .at() method returns the element at the specified index. If the index is negative, the element is counted from the end of the array, string, or typed array. If the index is greater than or equal to the length of the array, string, or typed array, undefined is returned.

```javascript
const array = ['a', 'b', 'c', 'd', 'e'];
console.log(array.at(0)); // a
console.log(array.at(-1)); // e
console.log(array.at(10)); // undefined
```

### Object: .hasOwn()

The .hasOwn() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

```javascript
const object = { a: 1, b: 2, c: 3 };
console.log(object.hasOwn('a')); // true
console.log(object.hasOwn('d')); // false
```

### RegExp: match .indices ('d' flag)

The new /d flag feature provides some additional information about the start and indices position end of each match in the input string.

```javascript
const regex = /t(e)(st(\d?))/dg;
const string = 'test1test2';

const matches = regex.match(string);
console.log(matches.indices); // [[0, 5, 1, 3, 4], [5, 10, 6, 8, 9]]
```

## ECMAScript 2021 aka ES12

ECMAScript 2021 is the 12th edition of the ECMAScript standard, it was released on June 15, 2021 and has been implemented by major web browsers.

ECMAScript 2021 introduces a number of new features, including:

### replaceAll

This method allows you to replace all specified characters in a string without using a regular expression.
The method takes two parameters: the character we want to replace and the character we want to replace it with.

```javascript
const str = 'Hello World';
console.log(str.replaceAll('l', 'x')); // Hexxo Worxd
```

### Promise.any()

`Promise.any()` takes an array of promises as an argument. If all promises are resolved, the first one resolved will be returned. If all promises are rejected, an `AggregateError` will be returned.

```javascript
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'two'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 300, 'three'));

Promise.any([promise1, promise2, promise3]).then((value) => console.log(value)); // two
```

### Numeric separators

The numeric separators make it easy to read large numbers within our code by adding the `_` separator.

```javascript
const number = 1_000_000;
console.log(number); // 1000000
```

The key restriction to keep in mind is: you can only enter `_` characters between two digits.
Another very important aspect to keep in mind is that it is not possible to parse numbers that use separators.

### WeakRef

A WeakRef object contains a weak reference to an object named target or referent. A weak reference to an object is a reference that does not prevent the object from being reclaimed by the garbage collector. Conversely, a normal (or strong) reference keeps an object in memory. When an object no longer has strong references to it, the JavaScript engine's garbage collector can destroy the object and reclaim its memory. In that case, it is no longer possible to get the object from a weak reference.

The main use of weak references (WeakRef) is to implement caches on large objects.

```javascript
const cache = new Map();

function process(obj) {
  if (!cache.has(obj)) {
    cache.set(obj, new WeakRef(obj));
  }
  return cache.get(obj);
}
```

### Logical assignment operators

Three new logical assignment operators have been introduced namely: &&=, ||=, and ??=.

The first operator, &&=, is used between two values. If the first value is true, the second value will be assigned to the first.

```javascript
let a = 1;
let b = 0;

a &&= 2;
b &&= 2;

console.log(a); // 2
console.log(b); // 0
```

The second operator, i.e. ||=, is also used between two values, with the difference however that, in this case, if the first value is not true, then the second value will be assigned to the first.

```javascript
let a = 1;
let b = 0;

a ||= 2;
b ||= 2;

console.log(a); // 1
console.log(b); // 2
```

Finally the third operator ??=. This operator checks if the first value is null or undefined. If it is, then the second value is assigned to the first.

```javascript
let a = null;
let b = 0;

a ??= 2;
b ??= 2;

console.log(a); // 2
console.log(b); // 0
```

## ECMAScript 2020 aka ES11

ECMAScript 2020 is the twelfth edition of the ECMAScript language specification, it was released on June 15, 2020 and has been implemented by major web browsers.

ECMAScript 2020 introduces a number of new features, including:

### BigInt

`BigInt` is a built-in object that provides a way to represent whole numbers larger than 2⁵³ — 1, which is the largest number in JS.

A `BigInt` is created by adding `n` to the integer (ex. `5n`) or by calling `BigInt()`.

```javascript
const max = Number.MAX_SAFE_INTEGER;
console.log(max); // 9007199254740991

const maxPlusOne = max + 1;
console.log(maxPlusOne); // 9007199254740992

const maxPlusTwo = max + 2;
console.log(maxPlusTwo); // 9007199254740992

const bigger = 9007199254740994n;
console.log(bigger); // 9007199254740994n
```

### import()

Dynamic `import()` returns a promise for the module namespace object of the requested module. Therefore, imports can now be assigned to a variable using async/await.

```javascript
const module = await import('./module.js');
```

### Promise.allSettled()

The `Promise.allSettled()` method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

The difference between `Promise.all()` and `Promise.allSettled()` is that the first will resolve only if all the promises are resolved successfully and without an error. If any promise gets rejected, `.all()` won't resolve. On the other hand, `Promise.allSettled()` will settle even if the promise is resolved or rejected.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);
// "fulfilled"
// "rejected"
```

### Nullish Coalescing Operator (??)

The nullish coalescing operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

```javascript
const user = {};
console.log(user.profile.name ?? 'foo'); // 'foo'

const foo = null ?? 'default';
console.log(foo); // 'default'

const bar = 0 ?? 'default';
console.log(foo); // 0
```

### Optional Chaining Operator (?.)

The optional chaining operator (`?.`) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

The `?.` operator is like the `.` chaining operator, except that instead of causing an error if a reference is nullish (`null` or `undefined`), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns `undefined` if the given function does not exist.

```javascript
const user = { favorites = [] };
console.log(user.profile?.name); // undefined

console.log(user.sayHello?.()); // undefined
```

### Private class variables

Class fields are public by default, but private class members can be created by using a hash `#` prefix.

```javascript
class TestClass {
  #privateField;
  static #PRIVATE_STATIC_FIELD;

  #privateMethod() {
    return 'hello world';
  }

  static #privateStaticMethod() {
    return 'hello world';
  }
}
```

Like public fields, private fields are added at construction time in a base class, or at the point where super() is invoked in a subclass.

Private static fields are added to the class constructor at class evaluation time.

Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.

## ECMAScript 2019 aka ES10

### Array.prototype.flat && Array.prototype.flatMap

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
let array1 = ['a', 'b', [1, 2, 3]];
console.log(array1.flat()); // ['a', 'b', 1, 2, 3]
```

The method excludes gaps or empty elements in the array.

The `flatMap()` method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a `map()` followed by a `flat()` of depth 1, but slightly more efficient than calling those two methods separately.

```javascript
let array1 = [1, 2, 3, 4];
console.log(array1.flatMap((x) => [x + 1])); // [2, 3, 4, 5]
```

### Object.fromEntries()

The `Object.fromEntries()` method transforms a list of key-value pairs into an object.

```javascript
const entries = new Map([
  ['a', 'b', 'c'],
  [1, 2, 3],
]);
console.log(Object.fromEntries(entries)); // { a: 1, b: 2, c: 3 }
```

### String.trimStart() & String.trimEnd()

The `trimStart()` method (alias `trimLeft()`) removes whitespace from the beginning of a string.

The `trimEnd()` method (alias `trimRight()`) removes whitespace from the end of a string.

```javascript
const greeting = '   Hello world!   ';
console.log(greeting.trimStart()); // 'Hello world!   '
console.log(greeting.trimEnd()); // '   Hello world!'
```

### Optional Catch Binding

It is now possible to use the `try`/`catch` block without having to supply the error parameter inside the catch block.

```javascript
try {
  // do something
} catch {
  // no binding or parameter to handle it
}
```

### Symbol.description

A new `Symbol.prototype.description` property has been added to retrieve the description from a symbol.

```javascript
const symbol1 = Symbol('my symbol');
console.log(symbol1.description); // 'my symbol'
```

## ECMAScript 2018 aka ES9

### Asynchronous generators

Asynchronous generators can be made asynchronous by using the `async` keyword.

```javascript
async function* generator_name() {
  //statements
}
```

### Asynchronous iterators

Added support to asynchronous iteration with the `await of loop`.

```javascript
for await (variable of iterable) {
  statement;
}
```

### Object Rest/spread operator

The rest operator puts the rest of some specific user-supplied values into a JavaScript array.

```javascript
const student = {
  age: 10,
  height: 5,
  weight: 50,
};
const { age, ...other } = student;
console.log(age); // 10
console.log(other); // { height: 5, weight: 50 }
```

The spread operator can be used to combine multiple objects or cloning objects.

```javascript
const obj1 = { a: 10, b: 20 };
const obj2 = { c: 30 };
const clone_obj = { ...obj1 };
const obj3 = { ...obj1, ...obj2 };
console.log(clone_obj); // {a: 10, b: 20}
console.log(obj3); // {a: 10, b: 20, c: 30}
```

### Promise.prototype.finally

The `finally()` is executed whenever a promise is settled, regardless of its outcome. This function returns a promise. It can be used to avoid code duplication in both the promise's `then()` and `catch()` handlers.

```javascript
asyncFunc()
  .then((result) => {
    // do something
  })
  .catch((error) => {
    // handle error
  })
  .finally(() => {
    // do something
  });
```
