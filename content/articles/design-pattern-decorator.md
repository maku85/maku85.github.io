---
date: 2021-02-05T09:00:00.000Z
title: Structural pattern - Decorator
description: Decorator design pattern implemented in JS
img: https://images.unsplash.com/photo-1512542194577-1db2e4eef915?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVjb3JhdGlvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60
tags: javascript, design-pattern, structural-pattern
published: false
---

### Description

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

Decorator pattern consists of dynamically augmenting the behavior of an existing object. The difference with inheritance is that decorator doesn’t add the behavior to all the objects of the same class, only to the instances that are decorated.

### Implementation

Like in the proxy patterns, composition and object augmentation are the main techniques.

#### Composition

Using composition, the decorated component is wrapped around a new object
that usually inherits from it. The Decorator in this case simply needs to define
the new methods while delegating the existing ones to the original component:

```javascript
function decorate(component) {
  var proto = Object.getPrototypeOf(component)

  function Decorator(component) {
    this.component = component
  }
  Decorator.prototype = Object.create(proto)

  //new method
  Decorator.prototype.greetings = function () {
    //...
  }

  //delegated method
  Decorator.prototype.hello = function () {
    this.component.hello.apply(this.component, arguments)
  }

  return new Decorator(component)
}
```

#### Object augmentation

Object decoration can also be achieved by simply attaching new methods directly
to the decorated object, as follows:

```javascript
function decorate(component) {
  //new method
  component.greetings = function () {
    //...
  }
  return component
}
```
