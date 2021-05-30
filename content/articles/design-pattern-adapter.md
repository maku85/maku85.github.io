---
language: en
date: 2021-02-16T09:00:00.000Z
title: Structural pattern - Adapter
description: Adapter design pattern implemented in JS
img: https://images.unsplash.com/photo-1564517945244-d371c925640b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkYXB0ZXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=900&q=60
tags: javascript, design-pattern, structural-pattern
published: false
---

### Description

Structural patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

The Adapter pattern allows us to access the functionality of an object using
a different interface, it "adapts" an object so that it can be
used by components expecting a different interface.

The objects participating in this pattern are:

- a _Client_ that calls into Adapter to request a service
- an _Adapter_, the implements the interface that the client expects or knows
- an _Adaptee_, the object being adapted (that has a different interface from what the client expects or knows)

### Implementation

A possible example is an adapter that will make us abel to use a database as a storage bakend for simple system operations converting every call to readFile() and writeFile(), from fs module, to calls to db.get() and db.put().

```javascript
// adapter
module.exports = function createFsAdapter(db) {
  var fs = {};
  fs.readFile = function(filename, options, callback) {
    ...
    db.get(path.resolve(filename), { ... })
  }
  fs.writeFile = function(filename, contents, options, callback) {
    ...
    db.put(path.resolve(filename), contents, { ... })
  }

  return fs;
}

// exmple use
const fsAdapter = require('./fsAdapter');
const db = require(...);
const fs = fsAdapter(db);
fs.writeFile('file.txt', 'Hello!', function() { ... })
fs.readFile('missing.txt', {encoding: 'utf8'}, function(err, res) { ... }
```

### Use case

One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application. Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.
