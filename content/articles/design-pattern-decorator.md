---
title: Design pattern - Decorator
description: Decorator design pattern implemented in Node.js
img: https://images.unsplash.com/photo-1512542194577-1db2e4eef915?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVjb3JhdGlvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60
tags: Javascript, Design pattern, Node.js
---

### Description

Decorator pattern augments with new functionalities. The difference with inheritance is that decorator doesn’t add the behavior to all the objects of the same class, only to the instances that are decorated. Like in the proxy patterns, composition and object augmentation are the main techniques.

### Implementation

```javascript
const User = function(name) {
  this.name = name;
  this.say = fucntion() {
    console.log(`User: ${this.name}`);
  }
}

const DecoratedUser = function(user, address, city) {
  this.user = user;
  this.name = user.name; // ensures interface stays the same
  this.address = address;
  this.city = city;

  this.say = function() {
    console.log(`Decorated User: ${this.name}, ${this.address}, ${this.city}`)
  }
}

const user = new User('Eli Manning');
user.say(); // User: Eli Manning
const decorated = new DecoratedUser(user, 'Metlife Stadium', 'New Jersey');
decorated.say(); // Decorated User: Eli Manning, Metlife Stafium, New Jersey
```

The DecoratedUser receives two arguments that help to modify the say function. The structure is pretty similar but the method behavior has changed.
