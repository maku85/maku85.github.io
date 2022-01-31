---
title: Structural Design Pattern - Proxy
description: The proxy is a structural design pattern that allows you to provide a substitute in place of another object, acting as a filter and offering the possibility to perform operations before or after the request arrives at the original object.
img: /articles/images/design-pattern-proxy.webp
tags:
  - javascript
  - design-pattern
  - structural-pattern
published: true
---

The proxy and the original object, defined as "subject", have the same interface and this therefore allows them to exchange transparently with each other. The proxy, as mentioned, intercepts all or only some operations that are intended to be performed on the subject, modifying or enriching their behavior.

There are various ways to implement this pattern, for example through "Composition" or using the Proxy API.

#### Object composition

With the "composition" technique, one object is combined with another to extend or use its functionality. In the case of the proxy, the new object has the same interface as the subject from which it was created and maintains an internal reference to the original object in the form of an instance variable. Inside the proxy you will need to intercept the methods you want to manipulate and delegate the rest to the original object.

```javascript
class Subject {
  hello() {
    return 'Hello world!'
  }

  goodbye() {
    return 'Goodbye world!'
  }
}

class Proxy {
  constructor() {
    this.subject = new Subject();
  }

  // proxied method
  hello() {
    return 'Hello proxied world!'
  },

  // delegated method
  goodbye() {
    return subject.goodbye()
  },
}
```

#### Proxy API

Using these APIs allows you to have an object proxy passed as a parameter.

```javascript
const p = new Proxy(target, handler);
```

where the `target` is the original object and the` handler` is an object that defines which operations will be intercepted and how they will be handled.

```javascript
const target = {
  message1: 'hello',
  message2: 'everyone',
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'message2') {
      return 'world';
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // hello
console.log(proxy.message2); // world
```
