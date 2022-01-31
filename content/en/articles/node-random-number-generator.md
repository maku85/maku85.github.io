---
title: Random number generator with Node.js
description: There are various cases in which you need to generate random numbers but you have to be careful because sometimes randomness is not really so "random".
img: /articles/images/random-number-generator.webp
tags:
  - javascript
published: true
---

In general, there are three types of "random":

- _truly random_: that is the randomness to which no model or algorithm is applied (but whose existence is questionable)
- _unpredictable_ :, not exactly random but definitely impossible to predict
- _irregular_: what most people think of when they think of the "random" number

"Irregular" numbers are quick to generate, but absolutely useless for security purposes: even if there doesn't seem to be a pattern, there is almost always a way to predict their values. The only realistic use case for irregular values ​​is things that are represented visually, such as game elements or randomly generated sentences.

The "unpredictable" numbers are a little slower to generate but more resistant to attacks. This data is provided by what is called the Cryptographically Secure Pseudo-Random Number Generator (CSPRNG).

In Javascript the `Math.random()` method is often used which however is not a true random number generator but is pseudo-random, this is because over time the numbers begin to repeat themselves and eventually show a non-random pattern, thus re-entering among the "irregular" generators. A possible alternative comes from the use of the **Web Crypto API**.

The Web Crypto API are used to perform cryptographic operations (such as hashing, signature generation and verification, encryption and decryption) but among the various methods, the one that interests our case is the `randomBytes(size)` method which provides numbers random. The method accepts as a parameter the number of bytes to generate and returns a Buffer. Node.js provides an implementation of the standard through the use of the framework's native `crypto` module.

Eg:

```javascript
const crypto = require('crypto');

const buf = crypto.randomBytes(60);

console.log('The random bytes of data generated is: ' + buf.toString('utf8'));
```

However, although the method is a CSPRNG it is not recommended to use it directly because it is easy to alter the result when it is "transformed".

Two solutions are therefore suggested in Node.js:

- if you need to generate single random numbers in a certain range it is recommended to use the form [random-number-csprng](https://www.npmjs.com/package/random-number-csprng)
- if you need to generate API keys or tokens of some kind better use [uuid](https://www.npmjs.com/package/uuid), in particular the `uuid.v4()` method

Both use a CSPRNG but "transform" the bytes impartially and therefore safely.
