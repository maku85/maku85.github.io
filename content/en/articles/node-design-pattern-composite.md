---
title: Structural Design Pattern - Composite
img: /design-pattern-composite.jpg
tags:
  - javascript
  - design-pattern
  - structural-pattern
published: true
---

Uncover the potential of the Composite design pattern in Node.js with this informative article. Explore how to create tree-like structures, treat individual objects and groups uniformly, and simplify complex operations. Learn practical examples and implementation strategies to harness the power of the Composite pattern in your Node.js applications.

<!--more-->

Questo pattern consente di trattare oggetti singoli e raggruppamenti di oggetti allo stesso modo, in modo da poter trattare i componenti di una struttura in modo uniforme, indipendentemente dal loro livello di gerarchia.

Il pattern Composite è composto da due tipi di classi: la classe base "Component" e la classe derivata "Composite". La classe base rappresenta i singoli elementi della struttura ad albero, mentre la classe Composite rappresenta gli elementi composti che possono contenere altri elementi.

La classe Composite implementa i metodi base della classe Componente, ma in aggiunta, essa include anche metodi per aggiungere, rimuovere o accedere ai suoi elementi figlio. Ciò consente di creare strutture ad albero anche gerarchiche complesse, che sono comunque gestibili tramite un'interfaccia comune.

Inoltre, l'utilizzo di questo pattern permette di creare una relazione tra gli oggetti, che può essere utilizzata per esempio, per la navigazione della struttura ad albero.

Un esempio comune di utilizzo del pattern Composite è la creazione di un file system. In un file system, ci sono cartelle e file. Le cartelle possono contenere altre cartelle o file, mentre i file non possono contenere altri elementi. Utilizzando il pattern Composite, è possibile creare una classe "Cartella" che rappresenta sia le cartelle principali che le sottocartelle, e una classe "File" che rappresenta i file. Entrambe le classi estendono un'interfaccia comune chiamata "Component", che definisce i metodi comuni a entrambe le classi.

### In Javascript

Per la creazione di questo pattern in javascript, è possibile utilizzare le proprietà dell'oggetto e dell'ereditarietà presenti nella programmazione orientata agli oggetti in javascript (es: classi, ereditarietà tramite prototipi) per creare la classe base "Component" e la classe derivata "Composite", e metodi per gestire la gerarchia degli elementi.

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
