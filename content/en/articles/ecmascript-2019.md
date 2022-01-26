---
title: ECMAScript 2019 aka ES10
description: The latest features introduced to JavaScript in ES2019.
img: https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80
tags: nodejs, ECMAScript
published: false
---

## Array.prototype.flat && Array.prototype. flatMap

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
let array1 = ['a', 'b', [1, 2, 3]];
let array2 = array1.flat();
//['a', 'b', 1, 2, 3]
```

We should also note that the method excludes gaps or empty elements in the array:

```javascript
let array1 = ['a', 'b', , , , 'c'];
let array2 = array1.flat();
// ['a','b','c']
```

The `flatMap()` method has the same effect as using the `map()` method followed by the `flat()` method with the default depth of 1

```javascript
let array1 = [1, 2, 3, 4];
array1.flatMap((x) => [x + 1]);
// [2, 3, 4, 5]
```

## Object.fromEntries()

It creates an object or transforms key-value pairs into an object. It only accepts iterables.

```javascript
const obj = { a: 1, b: 2, c: 3};const entries = Object.entries(obj);
// entries
(3) [Array(2), Array(2), Array(2)]
0: (2) ["a", 1]
1: (2) ["b", 2]
2: (2) ["c", 3]const obj2 = Object.fromEntries(entries)
// {a: 1, b: 2, c: 3}
```

## String.trimStart() & String.trimEnd()

The `trimStart()`/`trimEnd()` methods removes whitespace from the beginning/end of a string.

```javascript
let result = ' hello!'.trimStart();
// "hello!"let cadena = 'hello '.trimEnd()
// "hello!"
```

## Optional Catch Binding

It allows us to use `try`/`catch` without having supplied the error parameter within the catch block.

Without optional `catch` binding:

```javascript
try {
  // do something
} catch (e) {
  // we have error parameter to handle it
}
```

With optional `catch` binding:

```javascript
try {
  // do something
} catch {
  // no binding or parameter to handle it
}
```

Although it is not a recommended practice in most cases, it makes sense when you know you’re not going to use the exception object.

## Function “toString” Revision

Now the `toString` method must return source text slice from the beginning of the first token to end of the last token matched by the appropriate grammar.

```javascript
function /_ kk_/ foo() { /_ cc _/ }// before:
foo.toString();
// "function foo() {}"// Now:
foo.toString();
//"function /_ kk_/ foo() { /_ cc _/ }"
```

## Array.Sort Stability

Previously, V8 used an unstable `QuickSort` for arrays with more than 10 elements. V8(Chrome ≥70) uses the stable `TimSort` algorithm.

```javascript
const array1 = [
{ name: "a", age: 14 },
{ name: "b", age: 14 },
{ name: "c", age: 13 },
{ name: "d", age: 13 },
{ name: "e", age: 13 },
{ name: "f", age: 13 },
{ name: "g", age: 13 },
{ name: "h", age: 13 },
{ name: "i", age: 12 },
{ name: "j", age: 12 },
{ name: "k", age: 12 }
]const array2 = array1.sort( (a,b) => b.age - a.age)
```

The array is pre-sorted alphabetically by name. To sort by age, we pass a custom callback that compares the ages. This is the result that you’d expect:

```javascript
0: {name: "a", age: 14}
1: {name: "b", age: 14}
2: {name: "c", age: 13}
3: {name: "d", age: 13}
4: {name: "e", age: 13}
5: {name: "f", age: 13}
6: {name: "g", age: 13}
7: {name: "h", age: 13}
8: {name: "i", age: 12}
9: {name: "j", age: 12}
10: {name: "k", age: 12}
```

The array is sorted by age, but within each age, they’re still sorted alphabetically by name.

Before, the JavaScript specification didn’t require sort stability for Array.sort, and instead left it up to the implementation. And because this you could also get this sort of result where “b” appears before “a”:

```javascript
0: {name: "b", age: 14}
1: {name: "a", age: 14}
2: {name: "c", age: 13}
3: {name: "d", age: 13}
4: {name: "e", age: 13}
5: {name: "f", age: 13}
6: {name: "g", age: 13}
7: {name: "h", age: 13}
8: {name: "i", age: 12}
9: {name: "j", age: 12}
10: {name: "k", age: 12}
```

## Symbol.description

`Symbol` is a built-in datatype for unique identifiers. Now a new property `Symbol.prototype.description` is added to get a description from symbol.

Before

```javascript
const symbol1 = Symbol('my symbol');
console.log(symbol1.toString()); //Symbol(my symbol)
```

Now:

```javascript
const symbol1 = Symbol('my symbol');
console.log(symbol1);
console.log(String(symbol1) === `Symbol(${'my symbol'})`);
console.log(symbol1.description); //Symbol(my symbol)
//true
//my symbol
```
