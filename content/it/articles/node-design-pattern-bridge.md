---
title: Design Pattern Strutturale - Bridge
description: Il design pattern Bridge è un pattern utilizzato per separare l'interfaccia di una classe dalla sua implementazione. Questo pattern consente di modificare le implementazioni indipendentemente dalle classi che le utilizzano, rendendo il codice più flessibile e modulare.
img: /articles/images/design-pattern-proxy.webp
tags: javascript, design-pattern, structural-pattern
published: true
---

Il pattern Bridge consiste di due parti: l'interfaccia e l'implementazione. L'interfaccia è un'astrazione che definisce le funzionalità che un'implementazione deve fornire. L'implementazione è la classe concreta che fornisce effettivamente le funzionalità.

Il vantaggio principale del pattern Bridge è che esso separa la responsabilità di fornire funzionalità da quella di fornire implementazione. Ciò significa che le classi che utilizzano l'interfaccia non sono dipendenti dalle classi di implementazione specifiche. Ciò rende il codice più flessibile e modulare, poiché le modifiche alle implementazioni non influiscono sulle classi che le utilizzano.

Un esempio di utilizzo del pattern Bridge può essere visto in un'applicazione che utilizza diversi database. L'interfaccia può definire le funzionalità comuni come inserire, aggiornare e eliminare dati, mentre le classi di implementazione specifiche possono fornire implementazioni per i singoli database come MySQL o PostgreSQL.

In generale, il pattern Bridge è utile quando si vuole creare un'architettura flessibile, in cui la logica di business è separata dalle sue implementazioni concrete, evitando di creare classi monolitiche.

#### In Javascript

Per implementare il pattern Bridge in JavaScript, è possibile utilizzare una combinazione di classi e funzioni di costruzione (costruttori). La classe di interfaccia può definire un'interfaccia comune per l'oggetto che verrà utilizzato dalle altre classi, mentre le classi di implementazione forniranno l'effettiva implementazione delle funzionalità.

Un esempio pratico potrebbe essere una classe "Renderer" come interfaccia, con due classi di implementazione: "CanvasRenderer" e "SVGRenderer", entrambe che estendono la classe "Renderer" e forniscono un'implementazione specifica del metodo di rendering. In questo modo, qualsiasi classe che necessiti di rendering può utilizzare questa interfaccia e non dipende da una specifica implementazione.

```javascript
// Interfaccia del renderer
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

// Implementazione del renderer utilizzando canvas
class CanvasRenderer extends Renderer {
  renderCircle(circle) {
    // logica di rendering su canvas
    console.log(`Rendering circle with radius ${circle.radius} on canvas`);
  }
}

// Implementazione del renderer utilizzando SVG
class SVGRenderer extends Renderer {
  renderCircle(circle) {
    // logica di rendering su SVG
    console.log(`Rendering circle with radius ${circle.radius} on SVG`);
  }
}

// La classe Circle utilizza l'interfaccia del renderer per renderizzare
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

In questo esempio la classe Circle utilizza l'interfaccia Renderer per renderizzare il cerchio. In questo modo l'oggetto circle non dipende da una specifica implementazione di renderer, ma solo dall'interfaccia. E' possibile cambiare l'implementazione utilizzando il renderer semplicemente cambiando l'oggetto renderer assegnato.

E' possibile anche utilizzare la programmazione funzionale e le closures per implementare il pattern Bridge in JavaScript, sfruttando la flessibilità del linguaggio e la possibilità di creare funzioni di "fabbrica" per generare le interfacce e le loro implementazioni.
