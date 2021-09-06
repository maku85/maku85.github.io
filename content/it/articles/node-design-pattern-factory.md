---
date: 2021-01-11T09:00:00.000Z
title: Design Pattern Creazionali - Factory
description: Il Factory è un design pattern creazionale che fornisce un'interfaccia per creare oggetti lasciando però che siano le sottoclassi a decidere quale tipo di oggetto istanziare.
img: /articles/images/design-pattern-factory.jpeg
tags: javascript, design-pattern, creational-patterns
published: true
---

Il vantaggio di questo approccio consiste nel lasciare che sia il factory a decidere il "come" istanziare l'oggetto (usando closures, prototype, l'operatore new o altro), non vincolando quindi la creazione ad una specifica tecnica e garantendo una maggiore flessibilità (utile soprattutto in fase di refactor).

Ovviamente le modalità (i costruttori/metodi) con cui il factory creerà i vari oggetti non dovranno essere accessibili direttamente dai "consumatori" - per evitare che possano essere modificati.

Ad esempio:

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
