---
title: Design pattern - MIddleware
description: Middleware design pattern implemented in Node.js
img: https://images.unsplash.com/photo-1518826141336-8d9d505b49f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJldHdlZW58ZW58MHx8MHw%3D&auto=format&fit=crop&w=900&q=60
tags: Javascript, Design pattern, Node.js
---

### Description

It represents a processing pipeline similar to streams. In Node, this pattern is used well beyond the boundaries of the Express framework. It can be a set of processing units, handlers, filters, and any function to perform the preprocessing and post processing of any kind of data. It gives flexibility, in fact, allows us to obtain a plugin infrastructure with little effort, providing an unobtrusive way for extending a system with new filters and handlers.

### Implementation
