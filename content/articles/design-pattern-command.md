---
title: Design pattern - Command
description: Command design pattern implemented in Node.js
img: https://images.unsplash.com/photo-1524741978410-350ba91a70d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbWFuZHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=900&q=60
tags: Javascript, Design pattern, Node.js
---

### Description

A Command is any object that encapsulates all the information necessary to perform an action at a later time. So, instead of invoking a function directly, we create an object representing the intention to perform such an invocation.

It’s built around four major components that can vary depending on the way we want to implement the pattern:

- Command: The object encapsulating the information necessary to invoke a function.
- Client: This creates the command and provides it to the invoker.
- Invoker: This is responsible for executing the command on the target.
- Target: Subject of the invocation. It can be a lone function or the method of an object.

Using a command pattern has several advantages. Some of them are:

- A command can be scheduled to be run at a later time
- Keeps a history of operations executed in the system
- Can be serialized and sent over the network so can be distributed.
- A command scheduled can be cancelled if not executed yet

### Implementation
