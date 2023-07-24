---
title: Structural Pattern Design - Adapter
img: /design-pattern-adapter.webp
tags:
  - javascript
  - design-pattern
  - structural-pattern
published: true
---

Discover the power of the Adapter design pattern in Node.js with this informative article. Learn how to seamlessly integrate incompatible interfaces, adapt third-party libraries, and improve code maintainability. Explore practical examples and implementation strategies to leverage the Adapter pattern effectively in your Node.js applications.

<!--more-->

To implement this pattern it is sufficient to create an adapter that wraps the incompatible object and make it capable of "communicating" with the other object.

For example, let's say in a project you use Redis to read and write data and you want to switch to Mongo instead.

```javascript
class RedisClient {
  get() {
    ...
  }
  set() {
    ...
  }
}

class MongoClient {
  read() {
    ...
  }
  write() {
    ...
  }
}

class User {
  constructor() {
    this.store = new RedisClient();
  }
  ...
}
```

The classes of the two clients have different interfaces and in order to migrate to Mongo use there are two solutions: rewrite the code in which the "incompatible" functions are called or create an adapter.

```javascript
class MongoAdapter extends Redis {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  get() {
    return this.adaptee.read();
  }
  set() {
    return this.adaptee.write();
  }
}

class User {
  constructor() {
    this.store = new MongoAdapter();
  }
  ...
}
```
