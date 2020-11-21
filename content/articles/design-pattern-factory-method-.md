---
title: Design pattern - Factory method
description: Factory method design pattern implemented in Node.js
img: https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjdG9yeXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60
tags: Javascript, Design pattern, Node.js
---

### Description

The factory method allows you to centralize the logic of creating objects in a single place. This allows you to forget about that part and focus on simply requesting the object you need and then using it.

### Implementation

Here is an example:

```javascript
;((_) => {
  let factory = new MyEmployeeFactory()

  let types = ['fulltime', 'parttime', 'contractor']
  let employees = []
  for (let i = 0; i < 100; i++) {
    employees.push(
      factory.createEmployee({ type: types[Math.floor(Math.random(2) * 2)] })
    )
  }

  //....
  employees.forEach((e) => {
    console.log(e.speak())
  })
})()
```

In the above code you’re adding objects to the same array, all of which share the same interface (they have the same set of methods) but you don’t really need to care about which object to create and when to do it.

Let's see the implementation

```javascript
class Employee {
  speak() {
    return "Hi, I'm a " + this.type + ' employee'
  }
}

class FullTimeEmployee extends Employee {
  constructor(data) {
    super()
    this.type = 'full time'
    //....
  }
}

class PartTimeEmployee extends Employee {
  constructor(data) {
    super()
    this.type = 'part time'
    //....
  }
}

class ContractorEmployee extends Employee {
  constructor(data) {
    super()
    this.type = 'contractor'
    //....
  }
}

class MyEmployeeFactory {
  createEmployee(data) {
    if (data.type == 'fulltime') return new FullTimeEmployee(data)
    if (data.type == 'parttime') return new PartTimeEmployee(data)
    if (data.type == 'contractor') return new ContractorEmployee(data)
  }
}
```

### Use case

One particular use case is to use this pattern for handling error object creation. For Example if you have an Express application with about 10 endpoints, where in every endpoint you need to return between two to three errors based on the user input, you will have about 30 sentences like the following:

```javascript
if (err) {
  res.json({error: true, message: “Error message here”})
}
```

If you were to centralize the logic for creating the error object then all you’d have to do throughout your code would be something like:

```javascript
if (err) {
  res.json(ErrorFactory.getError(err))
}
```
