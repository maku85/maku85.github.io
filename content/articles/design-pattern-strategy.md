---
date: 2021-02-23T09:00:00.000Z
title: Behavioral pattern - Strategy
description: Strategy design pattern implemented in JS
img: https://images.unsplash.com/photo-1457694716743-eb419114c894?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
tags: javascript, design-pattern, structural-pattern
published: false
---

### Description

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

Strategy pattern lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

### Structure

Pattern is composed by:

- **Context**, that maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface
- **Strategy** interface, common to all concrete strategies, that declare a method the context uses to execute a strategy
- **Concrete Strategies**, that implement different variations of an algorithm the context uses

The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn’t know what type of strategy it works with or how the algorithm is executed.

The Client creates a specific strategy object and passes it to the context. The context exposes a setter which lets clients replace the strategy associated with the context at runtime.

### Implementation

To implement it:

- in the context class, identify an algorithm that’s prone to frequent changes
- declare the strategy interface common to all variants of the algorithm
- extract all algorithms into their own classes
- in the context class, add a field for storing a reference to a strategy object. Provide a setter for replacing values of that field. The context should work with the strategy object only via the strategy interface. The context may define an interface which lets the strategy access its data.
- clients of the context must associate it with a suitable strategy that matches the way they expect the context to perform its primary job.
