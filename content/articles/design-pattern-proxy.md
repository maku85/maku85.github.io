---
title: Design pattern - Proxy
description: Singleton design pattern implemented in Node.js
img: https://images.unsplash.com/photo-1588362951121-3ee319b018b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZXNzJTIwY29udHJvbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60
tags: Javascript, Design pattern, Node.js
---

### Description

A proxy is an object that controls access to another object, called subject. Both have identical interface and this allows us to transparently swap one for the other. A proxy intercepts all or some of the operations that are meant to be executed on the subject, modifying their behavior.

### Implementation

In JS there are some techniques for implementing proxies like object augmentation, object composition or just use the Proxy object introduced in ES6. Composition can be considered the safest way of creating a proxy as it doesn’t modify the subject so we are going to use it in the code example.

```javascript
const createProxy = subject => ({
  // proxied method
  hello: () => `${subject.hello()} world!`,
  // delegated method
  goodbye: () => subject.goodbye.apply(subject, arguments),
})

const foo = {
  hello: () => 'Hello foo,
  goodbye: () => 'Goodbye foo,
}

const proxy = createProxy(foo);
console.log(proxy.hello()) // Hello foo world!
console.log(proxy.goodbye()) // Goodbye foo
```

### Use case

A proxy is useful to several circumstances like data validation, security, caching, lazy loading, logging or making remote object appear like local.
