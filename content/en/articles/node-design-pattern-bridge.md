---
title: Structural Design Pattern - Bridge
description: The Bridge design pattern is a pattern used to separate a class's interface from its implementation.
img: /articles/images/design-pattern-bridge.jpg
tags:
  - javascript
  - design-pattern
  - structural-patterns
published: true
---

This pattern allows implementations to change independently of the classes that use them, making the code more flexible and modular.

The Bridge pattern consists of two parts: the interface and the implementation. Interface is an abstraction that defines the functionality an implementation must provide. The implementation is the concrete class that actually provides the functionality.

The main advantage of the Bridge pattern is that it separates the responsibility of providing functionality from that of providing implementation. This means that the classes using the interface are not dependent on specific implementing classes. This makes your code more flexible and modular, because changes to implementations don't affect the classes that use them.

An example of using the Bridge pattern can be seen in an application that uses several databases. The interface can define common functionality such as inserting, updating and deleting data, while specific implementation classes can provide implementations for individual databases such as MySQL or PostgreSQL.

In general, the Bridge pattern is useful when you want to create a flexible architecture, where business logic is separated from its concrete implementations, avoiding creating monolithic classes.

### In Javascript

To implement the Bridge pattern in JavaScript, you can use a combination of classes and constructor functions (constructors). The interface class can define a common interface to the object that will be used by the other classes, while the implementation classes will provide the actual implementation of the functionality.

A practical example would be a "Renderer" class as an interface, with two implementation classes: "CanvasRenderer" and "SVGRenderer", both of which extend the "Renderer" class and provide a specific rendering method implementation. This way, any class that needs rendering can use this interface and doesn't depend on a specific implementation.

```javascript
// Renderer interface
class Renderer {
  constructor() {
    if (new.target === Renderer) {
      throw new Error('Renderer is an abstract class and cannot be instantiated.');
    }
  }

  renderCircle(circle) {
    throw new Error('This method must be implemented by a subclass.');
  }
}

// Renderer implementation using canvas
class CanvasRenderer extends Renderer {
  renderCircle(circle) {
    // render logic on canvas
    console.log(`Rendering circle with radius ${circle.radius} on canvas`);
  }
}

// Renderer implementation using SVG
class SVGRenderer extends Renderer {
  renderCircle(circle) {
    // render logic on SVG
    console.log(`Rendering circle with radius ${circle.radius} on SVG`);
  }
}

// The Circle class uses the renderer interface to render
class Circle {
  constructor(x, y, radius, renderer) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.renderer = renderer;
  }

  render() {
    this.renderer.renderCircle(this);
  }
}

const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();
const circle = new Circle(5, 5, 10, canvasRenderer);
circle.render();
// Output: "Rendering circle with radius 10 on canvas"
circle.renderer = svgRenderer;
circle.render();
// Output: "Rendering circle with radius 10 on SVG"
```

In this example, the Circle class uses the Renderer interface to render the circle. This way the circle object doesn't depend on a specific renderer implementation, but only on the interface. It is possible to change the implementation using the renderer by simply changing the assigned renderer object.

It is also possible to use functional programming and closures to implement the Bridge pattern in JavaScript, exploiting the flexibility of the language and the possibility of creating "factory" functions to generate interfaces and their implementations.
