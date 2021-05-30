---
language: en
date: 2021-01-05T09:00:00.000Z
title: AbortController
description: How to cancel Javascript async tasks
img: https://images.unsplash.com/photo-1546617885-4822125f891e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
tags: javascript, async
published: false
source: https://medium.com/javascript-in-plain-english/canceling-javascript-async-tasks-with-abortcontroller-acda9f67f7e7
---

JavaScript offers different ways of aborting an asynchronous task, one of this is the AbortController object to abort the Fetch requests and other async tasks.

## Abort async task

Let’s imagine that we have an asynchronous function that takes a long time to process, `the generateReport` function that takes twenty seconds to finish. If you want, you can terminate the execution anytime, calling the `AbortController.abort()` method.

```javascript
let acontroller = new AbortController()
let signal = acontroller.signal

function generateReport(signal) {
  return new Promise((resolve, reject) => {
    const error = new DOMException('aborted!', 'AbortError')
    if (signal.aborted) {
      return reject(error)
    }

    const timeout = setTimeout(() => {
      resolve('you report!')
    }, 20000)

    signal.addEventListener('abort', () => {
      clearTimeout(timeout)
      reject(error)
    })
  })
}

generateReport(signal)
  .then((report) => {
    console.log(report)
  })
  .catch((e) => console.log(e))

acontroller.abort()
```

When a `controller.abort()` is called the `generateReport()` function rejects the promise with an appropriate error without doing anything further.

## Abort a Fetch requests

We can use AbortController to abort the Fetch request because Fetch has built-in integration with AbortController:

```javascript
const url = 'https://server/api/d1'

let aController = new AbortController()

let signal = aController.signal

const response = await fetch(url, { signal })

const data = await response.json()

aController.abort()
```

AbortController allows too canceling multiple Fetch petitions at once:

```javascript
const url1 = 'https://server/api/d1';
const url2 = 'https://server/api/d2';

let urls = [url1 ,url2'];

let aController = new AbortController();

let tasks = urls.map(url => fetch(url,{
  signal: aController.signal
}));

let results = await Promise.all(tasks);

//Abort all requests
aController.abort();
```

You can use AbortController in different environments:

- modern browsers
- Node, using an implementation of the WHATWG AbortController interface (for example node-fetch or npm abort-controller)
- legacy browsers, using polyfills, for example, with Babel

**Note:** Keep in mind that even if we cancel a Fetch request, this does not stop the request processing on your backend.
