---
language: en
date: 2021-01-08T09:00:00.000Z
title: Creational patterns - Singleton
description: The singleton pattern allows you to instantiate an object once and then use that one every time you need it, instead of creating a new one without having to keep track of a reference to it, either globally or just passing it as a dependency everywhere.
img: /articles/images/design-pattern-singleton.jpeg
tags: javascript, design-pattern, creational-pattern
published: false
---

A creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

The singleton pattern allows you to instantiate an object once and then use that one every time you need it, instead of creating a new one without having to keep track of a reference to it, either globally or just passing it as a dependency everywhere.

So the pattern solves two main problem:

- ensure that a class has just a single instance
- provide a global access point to that instance

### Implementation

To implements it you need to:

- add a private static field to the class for storing the singleton instance
- declare a public static creation method for getting the singleton instance
- implement a "lazy initialization" inside the static method. It should create a new object on its first call, and put it into the static field, and return that instance on all subsequent calls.
- make the constructor of the class private

In JS this pattern could be implemented by leveraging ES6 features (classes, modules and `const` variable) writing a singleton class using a locally global variable, in which to store our instance.

Instead of defining the static class we could initialize the instance outside the class, use `Object.freeze` to prevent methods change and implement the "lazy initialization" inside the constructor (so nobody messed with the singleness of the singleton).

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  doSomething() {
    ...
  }
}

const instance = new Singleton();
Object.freeze(instance);

exports default instance;
```

And you could use it like this:

```javascript
const obj1 = Singleton()
const obj2 = Singleton()

obj1.doSomething()
obj2.doSomething()

console.log('Equals:: ', obj1 === obj2)
// Equals::  true
```

### Use case

Singleton-like implementation is useful if you need only one instances of your classes. Example when having to deal with database connections and want to keep that connection alive and accessible throughout your code.

```javascript
const driver = require('...')

class DBClass {
  constructor(props) {
    if (!DBClass.instance) {
      DBClass.instance = this.
    }

    this.properties = props
    this._conn = null
  }

  get conn() {
    return this._conn;
  }

  set properties(props) {
    return this.properties = props;
  }

  connect() {
    this._conn = driver.connect(this.props);
  }
}

const defaultProps = { ... };
const instance = new DBClass(defaultProps);
Object.freeze(instance);

exports default instance;
```
