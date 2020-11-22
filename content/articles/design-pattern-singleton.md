---
date: 2020-11-21T09:00:00.000Z
title: Design pattern - Singleton
description: Singleton design pattern implemented in Node.js
img: /articles/images/design-pattern-singleton.jpeg
tags: javascript, design-pattern, nodejs
published: true
---

### Description

The singleton pattern allows you to instantiate an object once and then use that one every time you need it, instead of creating a new one without having to keep track of a reference to it, either globally or just passing it as a dependency everywhere.

### Implementation

In JS we could implement this pattern in two ways, one would be by using IIFEs (Immediately Invoked Function Expressions), the other would be by using ES6 modules and having our singleton class using a locally global variable, in which to store our instance. By doing this, the class itself gets exported out of the module, but the global variable remains local to the module.

```javascript
let instance = null

class SingletonClass {
  constructor() {
    this.value = Math.random(100)
  }

  printValue() {
    console.log(this.value)
  }

  static getInstance() {
    if (!instance) {
      instance = new SingletonClass()
    }

    return instance
  }
}

module.exports = SingletonClass
```

And you could use it like this:

```javascript
const obj = Singleton.getInstance()
const obj2 = Singleton.getInstance()

obj.printValue()
obj2.printValue()

console.log('Equals:: ', obj === obj2)
```

The output of course being:

```bash
0.5035326348000628
0.5035326348000628
Equals::  true
```

### Use case

Singleton-like implementation is useful if you need only one instances of your classes. Example when having to deal with database connections and want to keep that connection alive and accessible throughout your code.

```javascript
const driver = require('...')

let instance = null

class DBClass {
  constructor(props) {
    this.properties = props
    this._conn = null
  }

  connect() {
    this._conn = driver.connect(this.props)
  }

  get conn() {
    return this._conn
  }

  static getInstance() {
    if (!instance) {
      instance = new DBClass()
    }

    return instance
  }
}

module.exports = DBClass
```
