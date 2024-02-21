---
title: Structural Pattern Design - Decorator
tags:
  - javascript
  - design-pattern
  - structural-pattern
published: true
---

Discover the versatility of the Decorator design pattern in Node.js with this informative article. Explore how to dynamically add functionality to objects, without modifying their original structure. Learn practical examples and implementation techniques to leverage the Decorator pattern in your Node.js applications, enhancing code reusability and flexibility.

<!--more-->

The pattern is similar to the classic inheritance but unlike the latter the new features are not added to all objects of the same class but only to those instances that have been explicitly "decorated".

To implement this pattern it is sufficient to create a "decorator" function which receives an object as input and returns the "decorated" version.

```javascript
class SimpleObject {
  constructor() {
    ...
  }

  describe() {
    console.log('Hi, I\'m a simple object');
  }
}

function decorate(target) {
  target.describe = () => 'Hi, I\'m a decorated object';
  return object;
}

const simpleObject = new SimpleObject();
myObject.describe(); // Hi, I'm a simple object

const decoratedObject = decorate(simpleObject);
decoratedObject.describe(); // Hi, I'm a decorated object
```
