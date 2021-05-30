---
date: 2021-01-29T09:00:00.000Z
title: Structural pattern - Proxy
description: Proxy design pattern implemented in JS
img: https://images.unsplash.com/photo-1588362951121-3ee319b018b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZXNzJTIwY29udHJvbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60
tags: javascript, design-pattern, structural-pattern
published: false
---

### Description

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

The Proxy pattern provides a surrogate or placeholder object (**proxy**) for another object (**subject**) and controls access to this other object. A proxy intercepts all or some of the operations that are meant to be executed on the subject, augmenting or complementing their behavior while delegating the rest of them directly to the subject.

Proxy and subject objects have an indentical interface so it's easy to swap one for the other

### Implementation

There are several ways in which this pattern can be implemented.

#### Object composition

Composition is the technique whereby an object is combined with another object for
the purpose of extending or using its functionality. In our specific case a new object with the same interface as the subject is created, and a reference to the subject is stored internally in the proxy in the form of an instance variable
or a closure variable. The subject can be injected from the client at creation time or created by the proxy itself.

The following example use a pseudo class and a factory:

```javascript
function createProxy(subject) {
  var proto = Object.getPrototypeOf(subject)

  function Proxy(subject) {
    this.subject = subject
  }
  Proxy.prototype = Object.create(proto)

  //proxied method
  Proxy.prototype.hello = function () {
    return this.subject.hello() + ' world!'
  }

  //delegated method
  Proxy.prototype.goodbye = function () {
    return this.subject.goodbye.apply(this.subject, arguments)
  }

  return new Proxy(subject)
}
```

An alternative implementation might just use an object literal and a factory:

```javascript
function createProxy(subject) {
  return {
    //proxied method
    hello: function () {
      return subject.hello() + ' world!'
    },

    //delegated method
    goodbye: function () {
      return subject.goodbye.apply(subject, arguments)
    },
  }
}
```

#### Object augmentation

Object augmentation (or _monkey patching_) consists of modifying the subject
directly by replacing a method with its proxied implementation; for example:

```javascript
function createProxy(subject) {
  var helloOrig = subject.hello

  subject.hello = function () {
    return helloOrig.call(this) + ' world!'
  }

  return subject
}
```

This technique is the most convenient when we need to proxy only one or a few methods, but it has the drawback of modifying the subject object directly.

### Use case

A proxy is useful in several circumstances, for example:

- **Data validation**: The proxy validates the input before forwarding it
  to the subject
- **Security**: The proxy verifies that the client is authorized to perform the
  operation and it passes the request to the subject only if the outcome of
  the check is positive
- **Caching**: The proxy keeps an internal cache so that the operations are
  executed on the subject only if the data is not yet present in the cache
- **Lazy initialization**: If the creation of the subject is expensive, the proxy
  can delay it to when it's really necessary
- **Logging**: The proxy intercepts the method invocations and the relative
  parameters, recoding them as they happen
- **Remote objects**: A proxy can take an object that is located remotely,
  and make it appear local

Sometimes proxies are also called **middleware**, because, as it happens in
the middleware pattern, they allow us to preprocess and post-process the input/output of a function.
