---
date: 2021-01-11T09:00:00.000Z
title: Creational design patterns - Factory
description: The Factory is a creational design pattern that provides an interface to create objects while letting the subclasses decide which type of object to instantiate.
img: /articles/images/design-pattern-factory.jpeg
tags: javascript, design-pattern, creational-patterns
published: true
---

The advantage of this approach consists in letting the factory decide how to instantiate the object (using closures, prototype, the new operator or other), thus not binding the creation to a specific technique and guaranteeing greater flexibility. (especially useful in the refactor phase).

Obviously the modalities (constructors / methods) with which the factory will create the various objects should not be directly accessible by the "consumers" - to avoid that they can be modified.

Eg:

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
  create(type, props) {
    switch (type) {
      case 'fulltime':
        return new FullTimeEmployee(props)
      case 'parttime':
        return new PartTimeEmployee(props)
      case 'contractor':
        return new ContractorEmployee(props)
      default:
        return new Error('Employee type not supported')
    }
  }
}
module.exports = EmployeeFactory
```

```javascript
const EmployeeFactory = require('/EmployeeFactory')

const fulltime = EmployeeFactory.create('fulltime')
fulltime.speak()
// Hi, I'm a full time employee

const parttime = EmployeeFactory.create('parttime')
parttime.speak()
// Hi, I'm a part time employee

const contractor = EmployeeFactory.create('contractor')
contractor.speak()
// Hi, I'm a contractor employee
```
