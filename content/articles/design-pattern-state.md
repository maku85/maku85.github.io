---
date: 2021-03-05T09:00:00.000Z
title: Behavioral pattern - State
description: State design pattern implemented in JS
img: https://images.unsplash.com/photo-1510736661179-a0d68edb2f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
tags: javascript, design-pattern, structural-pattern
published: false
---

### Description

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

State pattern lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

The State pattern suggests that you create new classes for all possible states of an object and extract all state-specific behaviors into these classes. Instead of implementing all behaviors on its own, the original object, called context, stores a reference to one of the state objects that represents its current state, and delegates all the state-related work to that object.

### Structure

Pattern is composed by:

- **Context** stores a reference to one of the concrete state objects and delegates to it all state-specific work. The context communicates with the state object via the state interface. The context exposes a setter for passing it a new state object.
- **State** interface declares the state-specific methods. These methods should make sense for all concrete states because you don’t want some of your states to have useless methods that will never be called.
- **Concrete States** provide their own implementations for the state-specific methods. To avoid duplication of similar code across multiple states, you may provide intermediate abstract classes that encapsulate some common behavior.

State objects may store a backreference to the context object. Through this reference, the state can fetch any required info from the context object, as well as initiate state transitions.

Both context and concrete states can set the next state of the context and perform the actual state transition by replacing the state object linked to the context.

### Implementation

To implement it:

- decide what class will act as the context. It could be an existing class which already has the state-dependent code; or a new class, if the state-specific code is distributed across multiple classes.
- declare the state interface. Although it may mirror all the methods declared in the context, aim only for those that may contain state-specific behavior.
- for every actual state, create a class that derives from the state interface. Then go over the methods of the context and extract all code related to that state into your newly created class.
- while moving the code to the state class, you might discover that it depends on private members of the context. There are several workarounds:
  - make these fields or methods public.
  - turn the behavior you’re extracting into a public method in the context and call it from the state class. This way is ugly but quick, and you can always fix it later.
  - nest the state classes into the context class, but only if your programming language supports nesting classes.
- in the context class, add a reference field of the state interface type and a public setter that allows overriding the value of that field.
- go over the method of the context again and replace empty state conditionals with calls to corresponding methods of the state object.
- to switch the state of the context, create an instance of one of the state classes and pass it to the context. You can do this within the context itself, or in various states, or in the client. Wherever this is done, the class becomes dependent on the concrete state class that it instantiates.
