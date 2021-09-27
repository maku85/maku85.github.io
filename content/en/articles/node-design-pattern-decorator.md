---
title: Structural Pattern Design - Decorator
description: Structural design pattern that allows you to "decorate" an object by extending its functionality in a dynamic way.
img: /articles/images/design-pattern-decorator.jpeg
tags: javascript, design-pattern, structural-patterns
published: true
---

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
