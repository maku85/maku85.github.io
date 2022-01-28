---
title: ECMAScript
description: List of new features introduced with the various editions of the JavaScript standard.
img: /articles/images/ecmascript.webp
tags: JavaScript, ECMAScript
published: true
---

## ECMAScript 2020 aka ES11

### BigInt

`BigInt` is a built-in object that provides a way to represent whole numbers larger than 2⁵³ — 1, which is the largest number in JS.

A `BigInt` is created by adding `n` to the integer (ex. `5n`) or by calling `BigInt()`.

### import()

Dynamic `import()` returns a promise for the module namespace object of the requested module. Therefore, imports can now be assigned to a variable using async/await.

```javascript
const externalModule = './module.js';
import(externalModule).then((module) => ...);
```

### Promise.allSettled()

The `Promise.allSettled()` method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

The difference between `Promise.all()` and `Promise.allSettled()` is that the first will resolve only if all the promises are resolved successfully and without an error. If any promise gets rejected, `.all()` won't resolve. On the other hand, `Promise.allSettled()` will settle even if the promise is resolved or rejected.

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
