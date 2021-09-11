---
language: it
date: 2021-01-18T09:00:00.000Z
title: Design Pattern Strutturale - Proxy
description: Il proxy è un design pattern strutturale che permette di fornire un sostituto al posto di un altro oggetto, fungendo da filtro e offrendo la possibilità di effettuare operazioni prima o dopo che la richiesta arrivi all'oggetto originale.
img: /articles/images/design-pattern-proxy.jpeg
tags: javascript, design-pattern, structural-pattern
published: true
---

Il proxy e l'oggetto originale, definito "soggetto", hanno la stessa interfaccia e ciò permette quindi di poter scambiare in modo trasparente l'uno con l'altro. Il proxy, come detto, intercetta tutte o solo alcune operazioni che sono destinati ad essere eseguiti sul soggetto, modificando o arricchendo il loro comportamento.

Ci sono vari modi per implementare tale pattern, ad esempio tramite "Composizione" o utilizzando le Proxy API.

#### Object composition

Con la tecnica di "composizione" si combina un oggetto con un altro per estendere o utilizzare le sue funzionalità. Nel caso del proxy il nuovo oggetto ha la stessa interfaccia del soggetto da cui è stato creato e mantiene un riferimento interno all'oggetto originale sottoforma di variabile di istanza. All'interno del proxy sarà necessario intercettare i metodi che si vogliono manipolare e delegare il resto all'oggetto originale.

```javascript
class Subject {
  hello() {
    return 'Hello world!'
  }

  goodbye() {
    return 'Goodbye world!'
  }
}

class Proxy {
  constructor() {
    this.subject = new Subject();
  }

  // proxied method
  hello() {
    return 'Hello proxied world!'
  },

  // delegated method
  goodbye() {
    return subject.goodbye()
  },
}
```

#### Proxy API

L'utilizzo di queste API permette di avere un proxy dell'oggetto passato come parametro.

```javascript
const p = new Proxy(target, handler)
```

dove il `target` è l'oggetto originale e l' `handler` è un oggetto che definisce quali operazioni saranno intercettate e come verranno manipolate.

```javascript
const target = {
  message1: 'hello',
  message2: 'everyone',
}

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'message2') {
      return 'world'
    }
    return Reflect.get(...arguments)
  },
}

const proxy = new Proxy(target, handler)

console.log(proxy.message1) // hello
console.log(proxy.message2) // world
```
