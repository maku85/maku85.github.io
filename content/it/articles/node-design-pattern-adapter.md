---
title: Design Pattern Strutturali - Adapter
description: Design pattern strutturale che permette la collaborazione tra oggetti con interfacce incompatibili.
img: /articles/images/design-pattern-adapter.jpeg
tags: javascript, design-pattern, structural-patterns
published: true
---

Per implementare questo pattern è sufficiente creare un adapter che avvolge l'oggetto incompatibile e lo render capace di "comunicare" con l'altro oggetto.

Ad esempio poniamo il caso in cui in un progetto si usi Redis per leggere e scrivere i dati e si voglia invece passare ad utilizzare Mongo.

```javascript
class RedisClient {
  get() {
    ...
  }
  set() {
    ...
  }
}

class MongoClient {
  read() {
    ...
  }
  write() {
    ...
  }
}

class User {
  constructor() {
    this.store = new RedisClient();
  }
  ...
}
```

le classi dei due client hanno interfacce diverse e per poter migrare all'utilizzo di Mongo le soluzioni sono due: riscrivere il codice in cui vengono richiamate le funzioni "incompatibili" oppure creare un adapter.

```javascript
class MongoAdapter extends Redis {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  get() {
    return this.adaptee.read();
  }
  set() {
    return this.adaptee.write();
  }
}

class User {
  constructor() {
    this.store = new MongoAdapter();
  }
  ...
}
```
