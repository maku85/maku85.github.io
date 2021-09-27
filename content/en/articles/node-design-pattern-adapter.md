---
title: Structural Pattern Design - Adapter
description: Structural design pattern that allows collaboration between objects with incompatible interfaces.
img: /articles/images/design-pattern-adapter.jpeg
tags: javascript, design-pattern, structural-patterns
published: true
---

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
