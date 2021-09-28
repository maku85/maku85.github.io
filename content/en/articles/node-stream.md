---
title: Node.js Stream
description: Streams are data collected from one source and made available in another location in sequence.
img: /articles/images/node-stream.jpeg
tags: nodejs
published: true
---

One of the reasons why they are one of the most appreciated features of Node is the possibility they give to work with large amounts of data in environments with limited resources.

The Streams are contained in the [stream module](https://nodejs.org/api/stream.html) which is part of the core of the framework and are divided into four categories:

- _readable_, to read data
- _writable_, to write data
- _duplex_, to read and write data
- _transform_, to read data, transform them and then write them

## The events of the streams

All streams inherit from _EventEmitter_ and emit different types of events. Among these are:

- `data` - emitted when new data is" read "from the stream.
- `end` - issued when there is no more data available in the stream and all available data has already been" read "
- `finish` - emitted when a write stream is finished and all writes have completed.
- `close` - issued when a stream is completely closed. Unlike `end` and` finish` this event is not guaranteed to be emitted.
- `error` - issued when a stream encounters some error. It is usually (but not always) followed by the `close` event.
- `pause` - emitted when a reading stream is paused.
- `resume` - emitted when a read stream is taken out of pause.

## Connect the streams

To connect various streams together, and therefore have a more complex management of the data flow, we can use the `pipe()` method. The method will do nothing but listen for the `data` event of the starting stream (the stream on which the method is invoked) which will write the data to the destination stream (the one passed as a parameter to the method).

```javascript
source.pipe(destination);
```

Obviously such an operation could be done easily manually without using the method but using pipe is much safer because the so-called `backpressure` is managed automatically, a technique used in cases where the data reading process is very faster than writing.

Normally the writing stream is automatically closed when there is no more data to "read", if instead we need to keep it still open just add a parameter

```javascript
source.pipe(destination, { end: false });
```

One of the weaknesses of the method is the absence of error handling. In fact, if one of the streams involved fails the "pipeline" would be interrupted and it will be up to us to try to understand where the problem is and destroy the remaining streams to avoid a memory leak.

An alternative solution is given by the external module (pump)[https://www.npmjs.com/package/pump]. The method provided by the module will handle streams errors internally, listening for the `close` and` error` events, and take care of destroying the remaining streams.

```javascript
const pump = require('pump');

pump(stream1, stream2, stream3, ...);
```

## Readable stream

This type of stream comes in handy when we want to create a stream of data that other users can "read" (for example a stream that reads data from a file saved on disk).

### Flow vs pull

There are two ways to extract data from the stream: "pulling mode" and "pushing mode".

In "pull" mode it is sufficient to listen for the `data` event which will be called every time a new piece of data is read.

```javascript
myStream.on('data', handlerFunction);
```

To stop the incoming data stream, you can pause it, using the `pause()` method, and then resume it by calling the `resume()` method.

```javascript
myStream.pause();
myStream.resume();
```

This mode involves problems because if the stream is excessively "loaded" with incoming data, it risks not respecting the pause state.

In "push" mode to extract the data just wait until the stream is in a `readable` state and then call the` read` method continuously until you receive `null` (which represents the end of the stream). In this mode, to stop the data flow it will be enough to stop requesting data from the stream.

```javascript
const fs = require('fs);
const rs = fs.creareReadStream(__filename);

rs.on('readable', () => {
  const data = rs.read();
  while(data !== null) {
    console.log('Read chunk:', data);
    data = rs.read();
  }
});

rs.on('end', () => {
  console.log('No more data');
});
```

## Writable stream

This type of stream comes in handy when we want to create a stream that can allow other users to "write" data (for example a stream to write data to a file saved on disk).

## Duplex stream

This third type of stream is a mixed version that collects the two functionalities of the two previous streams, read and write (for example a gzip stream that compresses the data that is passed to it in input).

_PassThrough_ is a type of Duplex stream that acts as a tunnel to convey the read stream to a writable stream. Through the tunnel it is possible to check the processed data.

```javascript
const { PassThrough } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const tunnel = new PassThrough();
const readStream = createReadStream('./source.txt');
const writeStream = createWriteStream('./copy.txt');

tunnel.on('data', (chunk) => {
  console.log('bytes:', chunk);
});

readStream.pipe(tunnel).pipe(writeStream);
```

## Transform stream

This last type of stream allows you to "transform" the data "written" on the stream and make it available for "reading" at the stream output.

For example, let's create a stream that reads the entered text, capitalizes it and reprints it on the screen

```javascript
const { Transform } = require('readable-stream');

class MyTransform extends Transform {
  _transform(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
}

const upper = new MyTransform();
process.stdin.pipe(upper).pipe(process.stdout);
```

If our stream does not return serializable data (a Buffer or a string) it is necessary to use the _object mode_. In this mode simply the returned values ​​are generic objects and the only difference is the amount of data buffered. When this default mode is not used, the stream will use a buffer of 16kb of data before pausing, while in the active mode the stream will stop when it has buffered 16 objects.
