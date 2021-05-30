---
date: 2021-01-15T09:00:00.000Z
title: Creational patterns - Factory
description: Factory design pattern implemented in JS
img: /articles/images/design-pattern-factory.jpeg
tags: javascript, design-pattern, creational-patterns
published: false
---

### Description

A creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

The factory pattern allows you to separate the object creation from its implementation giving you more flexibility and control in the way you do it.

### Implementation

The pattern suggests to not expose the constructors of the objects it creates and replace it with a calls to a special factory method.

The objects participating in this pattern are:

- a _Creator_, the factory object that creates new products
- a _ConcreteProduct_, the product being created (all products support the same interface)

In JS, this can be achieved by exporting only the factory, while keeping each constructor private.

Here is an example:

```javascript
class Employee {
  speak() {
    return "Hi, I'm a " + this.type + ' employee'
  }
}

class FullTimeEmployee extends Employee {
  constructor(props) {
    super()
    this.type = 'full time'
    //....
  }
}

class PartTimeEmployee extends Employee {
  constructor(props) {
    super()
    this.type = 'part time'
    //....
  }
}

class ContractorEmployee extends Employee {
  constructor(props) {
    super()
    this.type = 'contractor'
    //....
  }
}

class EmployeeFactory {
  constructor(type, props) {
    if (type == 'fulltime') {
      return new FullTimeEmployee(props)
    }
    if (type == 'parttime') {
      return new PartTimeEmployee(props)
    }
    if (type == 'contractor') {
      return new ContractorEmployee(props)
    }
  }
}
```

```javascript
;((_) => {
  // gets a fulltime employee from the employee factory
  const fulltime = new EmployeeFactory('fulltime')
  fulltime.speak()

  // gets a parttime employee from the employee factory
  const parttime = new EmployeeFactory('parttime')
  parttime.speak()

  // gets a contractor employee from the employee factory
  const contractor = new EmployeeFactory('contractor')
  contractor.speak()
})()
```
