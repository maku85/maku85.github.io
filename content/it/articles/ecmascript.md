---
title: ECMAScript
description: Elenco delle nuove funzionalità introdotte con le varie edizioni dello standard JavaScript.
img: /articles/images/ecmascript.webp
tags: JavaScript, ECMAScript
published: true
---

## ECMAScript 2020 alias ES11

### BigInt

`BigInt` è un oggetto che fornisce un modo per rappresentare numeri interi maggiori di 2⁵³ — 1, che è il numero più grande in JS.

Un `BigInt` viene creato aggiungendo `n` al numero intero (es. `5n`) o chiamando il costruttore `BigInt()`.

### import()

L `import()` dinamico restituisce una promise per il modulo richiesto. Pertanto le importazioni possono ora essere assegnate a una variabile utilizzando async/await.

```javascript
const externalModule = './module.js';
import(externalModule).then((module) => ...);
```

### Promise.allSettled()

Il metodo `Promise.allSettled()` restituisce una promise che si risolve dopo che tutte le promise date sono state soddisfatte o rifiutate, con un array di oggetti che descrive ciascuno il risultato di ogni promise.

La differenza tra `Promise.all()` e `Promise.allSettled()` è che il primo si risolverà solo se tutte le promise vengono risolte con successo e senza errori. Se una promise viene rifiutata, `.all()` non si risolverà. D'altra canto, `Promise.allSettled()` si risolverà anche sia se la promise viene risolta o rifiutata.

### Nullish Coalescing Operator (??)

L'operatore di coalescenza nullo (`??`) è un operatore logico che restituisce il suo operando di destra quando il suo operando di sinistra è `null` o `undefined`, e in caso contrario restituisce il suo operando di sinistra.

```javascript
const user = {};
console.log(user.profile.name ?? 'foo'); // 'foo'

const foo = null ?? 'default';
console.log(foo); // 'default'

const bar = 0 ?? 'default';
console.log(foo); // 0
```

### Optional Chaining Operator (?.)

L'operatore di concatenamento opzionale (`?.`) consente di leggere il valore di una proprietà situata all'interno di una catena di oggetti collegati senza dover verificare che ogni riferimento nella catena sia valido.

L'operatore `?.` è come l'operatore di concatenamento `.`, tranne per il fatto che invece di causare un errore se un riferimento è nullo (`null` o `undefined`), l'espressione va in cortocircuito con un valore di ritorno di `undefined`. Quando viene utilizzato con le chiamata ai metodi, restituisce `undefined` se la funzione data non esiste.

```javascript
const user = { favorites = [] };
console.log(user.profile?.name); // undefined

console.log(user.sayHello?.()); // undefined
```

### Private class variables

I campi di classe sono pubblici per impostazione predefinita, ma i membri di classe privati, ma possono essere creati utilizzando il prefisso `#`.

```javascript
class TestClass {
  #privateField;
  static #PRIVATE_STATIC_FIELD;

  #privateMethod() {
    return 'hello world';
  }

  static #privateStaticMethod() {
    return 'hello world';
  }
}
```

Come i campi pubblici, i campi privati vengono aggiunti in fase di costruzione in una classe base o nel punto in cui `super()` viene invocato in una sottoclasse.

I campi statici privati vengono aggiunti al costruttore della classe al momento della valutazione della classe.

I metodi di istanza privata sono metodi disponibili su istanze di classe il cui accesso è limitato allo stesso modo dei campi di istanza privata.

## ECMAScript 2019 alias ES10

### Array.prototype.flat && Array.prototype.flatMap

Il metodo `flat()` crea un nuovo array con tutti gli elementi del sottoarray concatenati in esso in modo ricorsivo fino alla profondità specificata.

```javascript
let array1 = ['a', 'b', [1, 2, 3]];
console.log(array1.flat()); // ['a', 'b', 1, 2, 3]
```

Il metodo esclude gli spazi vuoti e gli elementi vuoti nell'array.

Il metodo `flatMap()` restituisce un nuovo array formato applicando una data funzione di callback a ciascun elemento dell'array, e quindi appiattendo il risultato di un livello. È identico a un `map()` seguito da un `flat()` di profondità 1, ma in modo leggermente più efficiente.

```javascript
let array1 = [1, 2, 3, 4];
console.log(array1.flatMap((x) => [x + 1])); // [2, 3, 4, 5]
```

### Object.fromEntries()

Il metodo `Object.fromEntries()` trasforma un elenco di coppie chiave-valore in un oggetto.

```javascript
const entries = new Map([
  ['a', 'b', 'c'],
  [1, 2, 3],
]);
console.log(Object.fromEntries(entries)); // { a: 1, b: 2, c: 3 }
```

### String.trimStart() & String.trimEnd()

Il metodo `trimStart()` (alias `trimLeft()`) rimuove gli spazi bianchi dall'inizio di una stringa.

Il metodo `trimEnd()` (alias `trimRight()`) rimuove gli spazi bianchi alla fine di una stringa.

### Optional Catch Binding

Adesso è possibile di usare il blocco `try`/`catch` senza dover per forza fornire il parametro di errore all'interno del blocco catch.

```javascript
try {
  // do something
} catch {
  // no binding or parameter to handle it
}
```

### Symbol.description

E' stata aggiunta una nuova proprietà `Symbol.prototype.description` per recuperare la descrizione da un simbolo.

```javascript
const symbol1 = Symbol('my symbol');
console.log(symbol1.description); // 'my symbol'
```

## ECMAScript 2018 alias ES9

### Generatori asincroni

I generatori asincroni possono essere resi asincroni usando la parola chiave `async`.

```javascript
async function* generator_name() {
  //statements
}
```

### Iteratori asincroni

E'stato aggiunto il supporto per l'iterazione asincrona con `await of loop`.

```javascript
for await (variable of iterable) {
  statement;
}
```

### Rest/spread operator (...)

L'operatore rest inserisce il resto di alcuni valori specifici forniti dall'utente in un array JavaScript.

```javascript
const student = {
  age: 10,
  height: 5,
  weight: 50,
};
const { age, ...other } = student;
console.log(age); // 10
console.log(other); // { height: 5, weight: 50 }
```

L'operatore spread può essere utilizzato per combinare più oggetti o clonare oggetti.

```javascript
const obj1 = { a: 10, b: 20 };
const obj2 = { c: 30 };
const clone_obj = { ...obj1 };
const obj3 = { ...obj1, ...obj2 };
console.log(clone_obj); // {a: 10, b: 20}
console.log(obj3); // {a: 10, b: 20, c: 30}
```

### Promise.prototype.finally

Il `finally()` viene eseguito ogni volta che una promise viene risolta, indipendentemente dal suo risultato e restituisce una promise.
