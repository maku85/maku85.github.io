---
date: 2020-11-21T09:00:00.000Z
title: Design pattern - Observer
description: Observer design pattern implemented in Node.js
img: https://images.unsplash.com/photo-1593018112765-79a700d8fd31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
tags: javascript, design-pattern, nodejs
---

### Description

In the observer pattern an object, called the **subject**, maintains a list of its dependents, called **observers**, and notifies them automatically of any state changes, usually by calling one of their methods.

In Node.js the observer pattern is already built into core and is available through the **EventEmitter** class. This class allow you to register one or more functions al listeners which will be invoked when a particuular event type is fired.

The methods availbale are:

- _on(event, listener)_: allow you to register a new listener for the given event type
- _once(event, listner)_: registers a new listener which is removed after the event is emitted for the first time
- _emit(event, [arg1, [...]])_: produces a new event and provides additional arguments to be passed to the listeners
- _removeListener(event, listener)_: removes listener for the specified event type

All methods will return the EventEmitter instance to allow chaining.

### Implementation

The following code shows a function which uses an EventEmitter to notify its subscrubers in real time when a particular pattern is found in a list of files:

```javascript
const EventEmitter = require('events').EventEmitter
const fs = require('fs')

function findPattern() {
  const emitter = new EventEmitter()

  files.forEach(function (file) {
    fs.readFile(file, 'utf8', function (err, content) {
      if (err) return emitter.emit('error', err)

      emitter.emit('fileread', 'file')
      let match = null
      if ((match = content.match(regex))) {
        match.forEach(function (elem) {
          emitter.emit('found', file, elem)
        })
      }
    })
  })

  return emitter
}
```

In the function the events emitter are:

- _fileread_ when a file is read
- _found_ when a match has been found
- _error_ when an error has occurred during the reading file

Now we can use our _findPattern()_ like:

```javascript
findPattern(['fileA.txt', '], /hello \w+/g)
  .on('fileread', function(file) {
    console.log(file + ' was read')
  })
  .on('found', function(file, match) {
    console.log('Matched "' match + '" in file ' + file)
  })
  .on('error', function(err) {
    console.log('Error emitted: ' + err.message)
  })
```

> **Note:** The EventEmitter cannot just throw exceptions when an error condition occurs. Instead, the convention is to emit a specia event, called _error_, and to pass an _Error_ object as an argument.

Sometimes, creating a new observable object directly from the EventEmitter
class is not enough, as this makes it impractical to provide functionality that
goes beyond the mere production of new events. It is more common, in fact, to
have the need to make a generic object observable; this is possible by extending
the EventEmitter class.

```javascript
const EventEmitter = require('events').EventEmitter
const util = require('util')
const fs = require('fs')

function FindPattern(regex) {
  EventEmitter.call(this)
  this.regex = regex
  this.files = []
}
util.inherits(FindPattern, EventEmitter)

FindPattern.prototype.addFile = function (file) {
  this.files.push(file)
  return this
}

FindPattern.prototype.find = function () {
  const self = this

  self.files.forEach(function (file) {
    fs.readFile(file, 'utf8', function (err, content) {
      if (err) return self.emit('error', err)

      self.emit('fileread', file)
      let match = null
      if ((match = content.match(self.regex)))
        match.forEach(function (elem) {
          self.emit('found', file, elem)
        })
    })
  })
  return this
}
```

The _FindPattern_ prototype that we defined extends the _EventEmitter_ using the
_inherits()_ function provided by the core module _util_. This way, it becomes a
full-fledged observable class. The following is an example of its usage:

```javascript
const findPatternObject = new FindPattern(/hello \w+/)
findPatternObject
  .addFile('fileA.txt')
  .addFile('fileB.json')
  .find()
  .on('found', function (file, match) {
    console.log('Matched "' + match + '" in file ' + file)
  })
  .on('error', function (err) {
    console.log('Error emitted ' + err.message)
  })
```

We can now see how the _FindPattern_ object has a full set of methods, in addition to being observable by inheriting the functionality of the _EventEmitter_.

### Use case

This pattern is great for dealing with asynchronous calls, since getting the response from an external request can be considered a new input.

Another widely spread use case for this pattern, as you’ve seen, is that of triggering particular events. This pattern can be found on any module that is prone to having events triggered asynchronously (such as errors or status updates). Some examples are the HTTP module, any database driver, and even socket.io, which allows you to set observers on particular events triggered from outside your own code.
