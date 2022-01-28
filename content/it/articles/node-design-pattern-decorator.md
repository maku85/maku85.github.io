---
title: Design Pattern Strutturali - Decorator
description: Design pattern strutturale che permette di "decorare" un oggetto estendendone le funzionalità in modo dinamico.
img: /articles/images/design-pattern-decorator.webp
tags: javascript, design-pattern, structural-patterns
published: true
---

Il pattern è simile alla classica ereditarietà ma a differenza di quest'ultima le nuove funzionalità non sono aggiunte a tutti gli oggetti della stessa classe ma solo a quelle istanze che sono state esplicitamente "decorate".

Per implementare tale pattern è sufficiente creare una funzione "decoratrice" che riceve in ingresso un oggetto e ne restiruisce la versione "decorata".

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
