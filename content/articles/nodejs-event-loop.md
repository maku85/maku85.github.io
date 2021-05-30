---
date: 2021-01-05T09:00:00.000Z
title: The Node.js event loop
description: What is happening under the hood
img: https://images.unsplash.com/photo-1416269223193-bc45028133f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80
tags: node
published: false
source: https://www.sitepoint.com/node-js-event-loop-guide/
---

## What is the Event Loop?

The event loop is a single-threaded, non-blocking, and asynchronously concurrent loop. The loop itself is semi-infinite, meaning if the call stack or the callback queue are empty it can exit the loop. Node uses libuv under the covers to poll the operating system for callbacks from incoming connections.

The event loop execute in a single thread because threads are relatively heavy in memory for the data it needs per connection.

## Event Loop Phases

- Timestamps are updated. The event loop caches current time at the start of the loop to avoid frequent time-related system calls. These system calls are internal to libuv.

- Is the loop alive? If the loop has active handles, active requests, or closing handles, it’s alive. As shown, pending callbacks in the queue keep the loop alive.

- Due timers execute. This is where setTimeout or setInterval callbacks run. The loop checks the cached now to have active callbacks that expired execute.

- Pending callbacks in the queue execute. If the previous iteration deferred any callbacks, these run at this point. Polling typically runs I/O callbacks immediately, but there are exceptions. This step deals with any stragglers from the previous iteration.

- Idle handlers execute — mostly from poor naming, because these run at every iteration and are internal to libuv.

- Prepare handles for setImmediate callback execution within the loop iteration. These handles run before the loop blocks for I/O and prepares the queue for this callback type.

- Calculate poll timeout. The loop must know how long it blocks for I/O. This is how it calculates the timeout:

  - If the loop is about to exit, timeout is 0.
  - If there are no active handles or requests, timeout is 0.
  - If there are any idle handles, timeout is 0.
  - If there are any handles pending in the queue, timeout is 0.
  - If there are any closing handles, timeout is 0.
  - If none of the above, the timeout is set to the closest timer, or if there are no active timers, infinity.
  - The loop blocks for I/O with the duration from the previous phase. I/O related callbacks in the queue execute at this point.

- Check handle callbacks execute. This phase is where setImmediate runs, and it’s the counterpart to preparing handles. Any setImmediate callbacks queued mid I/O callback execution run here.

- Close callbacks execute. These are disposed active handles from closed connections.

- Iteration ends.

You might wonder why polling blocks for I/O when it’s supposed to be non-blocking? The loop only blocks when there are no pending callbacks in the queue and the call stack is empty. In Node, the closest timer can be set by setTimeout, for example. If set to infinity, the loop waits on incoming connections with more work. It’s a semi-infinite loop, because polling keeps the loop alive when there’s nothing left to do and there’s an active connection.

## The Thread Pool

Node internals have two main parts: the V8 JavaScript engine, and libuv. File I/O, DNS lookup, and network I/O happen via libuv.

For network I/O, the event loop polls inside the main thread. This thread is not thread-safe because it doesn’t context switch with another thread. File I/O and DNS lookup are platform-specific, so the approach is to run these in a thread pool. One idea is to do DNS lookup yourself to stay out of the thread pool, as shown in the code above. Putting in an IP address versus localhost, for example, takes the lookup out of the pool. The thread pool has a limited number of threads available, which can be set via the UV_THREADPOOL_SIZE environment variable. The default thread pool size is around four.

V8 executes in a separate loop, drains the call stack, then gives control back to the event loop. V8 can use multiple threads for garbage collection outside its own loop. Think of V8 as the engine that takes in raw JavaScript and runs it on the hardware.

To the average programmer, JavaScript remains single-threaded because there’s no thread-safety. V8 and libuv internals spin up their own separate threads to meet their own needs.

If there are throughput issues in Node, start with the main event loop. Check how long it takes the app to complete a single iteration. It should be no more than a hundred milliseconds. Then, check for thread pool starvation and what can be evicted out of the pool. It’s also possible to increase the size of the pool via the environment variable. The last step is to microbenchmark JavaScript code in V8 that executes synchronously.

## process.nextTick() vs setImmediate()

At the end of each phase, the loop executes the process.nextTick() callback. Note that this callback type is not part of the event loop because it runs at the end of each phase. The setImmediate() callback is part of the overall event loop, so it’s not as immediate as the name implies. Because process.nextTick() needs intimate knowledge of the event loop, I recommend using setImmediate() in general.

There are a couple of reasons why you might need process.nextTick():

- Allow network I/O to handle errors, cleanup, or try the request again before the loop continues.

- It might be necessary to run a callback after the call stack unwinds but before the loop continues.
