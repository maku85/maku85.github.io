---
title: Design pattern - Chain of responsibility
description: Factory method design pattern implemented in Node.js
img: https://images.unsplash.com/photo-1488272690691-2636704d6000?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=900&q=60
tags: Javascript, Design pattern, Node.js
---

### Description

The chain of responsibility pattern consists of structuring your code in a way that allows you to decouple the sender of a request with the object that can fulfill it.

### Implementation

Here is a very basic implementation of this pattern, as you can see at the bottom, we have four possible values (or requests) that we need to process, but we don’t care who gets to process them, we just need, at least, one function to use them, hence we just send it to the chain and let each one decide whether they should use it or ignore it.

```javascript
function processRequest(r, chain) {
  let lastResult = null
  let i = 0
  do {
    lastResult = chain[i](r)
    i++
  } while (lastResult != null && i < chain.length)
  if (lastResult != null) {
    console.log('Error: request could not be fulfilled')
  }
}

let chain = [
  function (r) {
    if (typeof r == 'number') {
      console.log("It's a number: ", r)
      return null
    }
    return r
  },
  function (r) {
    if (typeof r == 'string') {
      console.log("It's a string: ", r)
      return null
    }
    return r
  },
  function (r) {
    if (Array.isArray(r)) {
      console.log("It's an array of length: ", r.length)
      return null
    }
    return r
  }
]

processRequest(1, chain)
processRequest([1, 2, 3], chain)
processRequest('[1,2,3]', chain)
processRequest({}, chain)
```

The output being:

```bash
It's a number:  1
It's an array of length:  3
It's a string:  [1,2,3]
Error: request could not be fulfilled
```

### Use case

The most obvious case of this pattern in our ecosystem is the middlewares for ExpressJS. With that pattern, you’re essentially setting up a chain of functions (middlewares) that evaluate the request object and decide to act on it or ignore it. You can think of that pattern as the asynchronous version of the above example, where instead of checking if the function returns a value or not, you’re checking what values are passed to the next callback they call.

```javascript
var app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next() //call the next function on the chain
})
```

Middlewares are a particular implementation of this pattern since instead of only one member of the chain fulfilling the request, one could argue that all of them could do it. Nevertheless, the rationale behind it is the same.
