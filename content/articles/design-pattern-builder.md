---
date: 2021-01-22T09:00:00.000Z
title: Creational patterns - Builder
description: Builder design pattern implemented in JS
img: https://images.unsplash.com/photo-1580810734915-93a368ed2073?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80
tags: javascript, design-pattern, creational-patterns
published: false
---

### Description

A creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

The builder pattern allows you to construct complex object step by step.

The pattern suggests that you extract the object construction code out of its own class and move it to separate objects called _builders_.

The pattern organizes object construction into a set of steps so to create the "final" object you execute a series of these steps on a builder object. You don’t need to call all of the steps but only that are necessary for producing a particular configuration of an object.

### Structure

The pattern structure is composed by:

- the **Builder** interface, that declares product construction steps that are common to all types of builders
- **Concrete Builders**, that provide different implementations of the construction steps
- **Products**, the resulting objects
- the **Director** class, that defines the order in which to call construction steps
- the Client, thtat associate one of the builder objects with the director

### Implementation

To implement it you need to:

- clearly define the common construction steps for building all available product representations
- declare these steps in the base builder interface
- create a concrete builder class for each of the product representations and implement their construction steps
- implement a method for fetching the result of the construction
- optionally create a director class
- with the client code create both the builder and the director objects

The construction result can be obtained directly from the director only if all products follow the same interface. Otherwise, the client should fetch the result from the builder.

Here is a example implementation in JS:

```javascript
class Task {
  static get Builder() {
    class Builder {
      setName(name) {
        this.name = name
        return this
      },
      setDescription(description) {
        this.description = description
        return this
      },
      setFinished(finished) {
        this.finished = finished
        return this
      },
      setDueDate(dueDate) {
        this.dueDate = dueDate
        return this
      },

      build() {
        return new Task(this)
      },
    }

    return Builder;
  }
}

const taskBuilder = new Task.Builder();
const task = taskBuilder
  .setName('Task A')
  .setDescription('finish book')
  .setDueDate(new Date(2019, 5, 12))ù
  .build();
```
