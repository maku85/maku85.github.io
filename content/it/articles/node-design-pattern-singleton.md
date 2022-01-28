---
title: Design Pattern Creazionali - Singleton
description: Design pattern creazionale che consente di garantire che un oggetto venga istanziato una sola volta per poi riusarlo ogni volta che ce n'è bisogno.
img: /articles/images/design-pattern-singleton.webp
tags: javascript, design-pattern, creational-pattern
published: true
---

In generale per implementare tale pattern sono necessarie due operazioni principali:

- rendere il costruttore della classe privato, in modo da evitare che vengano istanziati più oggetti.
- dichiarare un metodo pubblico (statico) che permetta di recuperare l'istanza. Tale metodo non farà altro che richiamare il costruttore privato, per creare l'oggetto, e salvarlo in un campo statico alla prima chiamata e restituire lo stesso oggetto alle chiamate successive.

In JS possiamo salvare l'istanza in una variabile locale e, anzichè definire la classe `static`, possiamo utilizzare il metodo [`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze?retiredLocale=it) per prevernire cambiamenti e infine implementare l'inizializzazione "lazy" all'interno del costruttore.

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  doSomething() {
    ...
  }
}

const instance = new Singleton();
Object.freeze(instance);

exports default instance;
```

A questo punto si può richiamare la classe in questo modo:

```javascript
const obj1 = Singleton();
const obj2 = Singleton();

obj1.doSomething();
obj2.doSomething();

console.log('Equals:: ', obj1 === obj2);
// Equals::  true
```

### Cached Singleton

Una possibile alternativa consiste nello sfruttare il [meccanismo di caching di Node.js](https://nodejs.org/api/modules.html#modules_caching) che permette di mantenere in cache i moduli che vengono caricati e richiamare lo stesso oggetto ogni volta che viene risolto lo stesso file. Il codice del singleton verrebbe quindi ridotto a:

```javascript
class Singleton {
  constructor() {
    this.message = 'I am an instance';
  }
}
module.exports = new Singleton();
```

Utilizzabile semplicemente in questo modo:

```javascript
const Singleton = require('./Singleton');
const instance = Singleton;
```

Unica nota da tenere in considerazione è che essendo Node.js case-sensitive risolvere moduli con nome file diversi produrrà istanze diverse.
