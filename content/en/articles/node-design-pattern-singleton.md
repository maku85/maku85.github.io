---
language: en
date: 2021-01-04T09:00:00.000Z
title: Creational Design Patterns - Singleton
description: The Singleton is a creational design pattern that allows you to ensure that a class has only one instance, while providing a global access point to it.
img: /articles/images/design-pattern-singleton.jpeg
tags: javascript, design-pattern, creational-pattern
published: true
---

In general, two main operations are required to implement this pattern:

- make the constructor of the class private, which prevents multiple objects from being instantiated.
- declare a public (static) method that allows you to retrieve the instance. This method will only call the private constructor, to create the object, and save it in a static field on the first call and return the same object on subsequent calls.

In JS we can save the instance in a local variable and, instead of defining the `static` class, we can use the method [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze?retiredLocale=en) to pre-govern changes and finally implement the "lazy" initialization inside the constructor.

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

At this point we can call the class like this:

```javascript
const obj1 = Singleton()
const obj2 = Singleton()

obj1.doSomething()
obj2.doSomething()

console.log('Equals:: ', obj1 === obj2)
// Equals::  true
```

### Use cases

An example of the use of this pattern is the sharing of the connection to the database to ensure that the connection remains active and accessible in various points of the application.

```javascript
class DBClass {
  constructor(props) {
    if (!DBClass.instance) {
      DBClass.instance = this;
    }

    this.properties = props;
    this._conn = null;
  }

  get conn() {
    return this._conn;
  }

  set properties(props) {
    return this.properties = props;
  }

  connect() {
    this._conn = ...;
  }
}

const defaultProps = { ... };
const instance = new DBClass(defaultProps);
Object.freeze(instance);

exports default instance;
```

### Cached Singleton

A possible alternative is to take advantage of the [Node.js caching mechanism](https://nodejs.org/api/modules.html#modules_caching) which allows you to keep the modules that are loaded in the cache and call the same object every time the same file is fixed. The singleton code would then be reduced to:

```javascript
class Singleton {
  constructor() {
    this.message = 'I am an instance'
  }
}
module.exports = new Singleton()
```

Simply usable in this way:

```javascript
const Singleton = require('./Singleton')
const instance = Singleton
```

The only note to keep in mind is that since Node.js is case-sensitive, resolving modules with different file names will produce different instances.
