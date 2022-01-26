---
title: ECMAScript 2020 aka ES11
description: The latest features introduced to JavaScript in ES2020.
img: https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80
tags: nodejs, ECMAScript
published: false
---

## BigInt

`BigInt` is a built-in object that provides a way to represent whole numbers larger than 2⁵³ — 1, which is the largest number in JS.

A `BigInt` is created by adding `n` to the integer (ex. `5n`) or by calling `BigInt()`.

Unlike BigInt`NumberBigInt`, BigInt`BigIntBigInt` cannot be used with methods in the built-in BigInt`MathBigInt` object and cannot be combined up with an instance of a BigInt`NumberBigInt` in operations (they can only be used with other BigInt`BigIntBigInt` variables, unless converted).

## import()

Dynamic `import()` returns a promise for the module namespace object of the requested module. Therefore, imports can now be assigned to a variable using async/await.

```javascript
const externalModule = './module.js';
import(externalModule).then((module) => ...);
```

## Promise.allSettled()

This is another method for promises that checks whether all the promises which we have created have settled
The difference between `promise.all()` and `promise.allSettled()` is `promise.all()` will resolve only if all the promises are resolved successfully and without an error. If any promise gets rejected, `.all()` won’t resolve. On the other hand, `promise.allSettled()` will settle even if the promise is resolved or rejected.

## Nullish Coalescing Operator (??)

To avoid empty result when try to retrieve element from object it we can use the nullish coalescing operator like below:

```javascript
console.log(user.profile.name ?? 'kumar');
```

Which will print the result as an empty string. The nullish operator checks if the property is `undefined` or `null`, not for all falsy values. If it is not `null` or `undefined`, it will return the initial value else it will print the property value.

## Optional Chaining Operator (?.)

When there are two levels of `undefined`, JavaScript will throw an error, however we can check if property is available by using the optional chaining operator like below:

```javascript
console.log(user?.profile?.name);
```

Which will return `undefined` if the property profile or name doesn’t exist.
