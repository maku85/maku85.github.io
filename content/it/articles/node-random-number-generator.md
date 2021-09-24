---
date: 2021-01-25T09:00:00.000Z
title: Generatore di numeri casuali con Node.js
description: Esistono vari casi in cui si ha la necessità di generare dei numeri casuali ma bisogna fare attenzione perchè la casualità a volte non è poi realmente così "casuale".
img: /articles/images/random-number-generator.jpeg
tags: javascript
published: true
---

In generale esistono tre tipi di "casualità":

- _realmente casuale_: ovvero la casualità alla quale non si applica alcun modello o algoritmo (ma la cui esistenza è discutibile)
- _imprevedibile_:, non proprio casuale ma decisamente impossibile da prevedere
- _irregolare_: ciò a cui pensa la maggior parte delle persone quando pensano al numero "casuale"

I numeri "irregolari" sono veloci da generare, ma assolutamente inutili ai fini della sicurezza: anche se non sembra che ci sia uno schema, c'è quasi sempre un modo per prevederne i valori. L'unico caso d'uso realistico per i valori irregolari sono le cose che sono rappresentate visivamente, come elementi di gioco o frasi generate casualmente.

I numeri "imprevedibili" sono un po' più lenti da generare ma più resistenti agli attacchi. Questi dati sono forniti da quello che viene chiamato CSPRNG (Cryptographically Secure Pseudo-Random Number Generator).

In Javascript si utilizza spesso il metodo `Math.random()` che però non è un vero generatore casuale di numeri ma è pseudo-casuale, questo perche nel tempo i numeri iniziano a ripetersi e alla fine mostrano uno schema non casuale, rientrando quindi tra i generatori "irregolari". Una possibile alternativa viene dall'uso delle **Web Crypto API**.

Le Web Crypto API sono utilizzate per effettuare operazioni crittografiche (come ad esempio hashing, signature generation e verification, encryption e decryption) ma tra i vari metodi quello che interessa il nostro caso è il metodo `randomBytes(size)` che fornisce appunto dei numeri casuali. Il metodo accetta come parametro il numero di bytes da generare e restituisce un Buffer. Node.js fornisce un'implementazione dello standard attraverso l'uso del modulo `crypto`, nativo del framework

Ad esempio:

```javascript
const crypto = require('crypto');

const buf = crypto.randomBytes(60);

console.log('The random bytes of data generated is: ' + buf.toString('utf8'));
```

Sebbene però il metodo sia un CSPRNG non è consigliato usarlo direttamente perchè è facile alterarne il risultato quando lo si "trasforma".

In Node.js sono suggerite quindi due soluzioni:

- se si ha la necessità di generare singoli numeri casuali in un certo intervallo è consigliato usare il modulo [random-number-csprng](https://www.npmjs.com/package/random-number-csprng)
- se si ha la necessità di generare chiavi API o token di qualche tipo meglio utilizzare [uuid](https://www.npmjs.com/package/uuid), in particolare il metodo `uuid.v4()`

Entrambi usano un CSPRNG ma "trasformano" i byte in modo imparziale e quindi sicuro.
