---
date: 2021-01-05T09:00:00.000Z
title: Memory management in V8 Engine
description: What is happening under the hood
img: https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
tags: javascript, async
published: false
source: https://deepu.tech/memory-management-in-v8/
---

## V8 memory structure

A running program is always represented by some allocated memory in the V8 process and this is called **Resident Set**. This is further divided into different segments, similar to the JVM memory structure.

### Heap Memory

This is where V8 stores objects or dynamic data. This is the biggest block of memory area and this is where **Garbage Collection**(GC) takes place. The entire heap memory is not garbage collected, only the Young and Old space is managed by garbage collection. Heap is further divided into below:

- **New Space** or “Young generation” where new objects live and most of these objects are short-lived. This space is small and has two **semi-space** managed by the “**Scavenger(Minor GC)**”. The size of the new space can be controlled using the _--min_semi_space_size(Initial)_ and _--max_semi_space_size(Max)_ V8 flags.
- **Old Space** or “Old generation” where objects that survived the “New space” for two minor GC cycles are moved to. This space is managed up by the Major GC(Mark-Sweep & Mark-Compact)”. The size of old space can be controlled using the _--initial_old_space_size(Initial)_ and _--max_old_space_size(Max)_ V8 flags. This space is divided into two:
  - **Old pointer space**: Contains survived objects that have pointers to other objects.
  - **Old data space**: Contains objects that just contain data(no pointer to other objects). Strings, boxed numbers, and arrays of unboxed doubles are moved here after surviving in “New space” for two minor GC cycles.
- **Large object space** where objects which are larger than the size limits of other spaces live. Each object gets its own [mmap](https://en.wikipedia.org/wiki/Mmap)'d region of memory. Large objects are never moved by the garbage collector.
- **Code-space** where the Just In Time(JIT) compiler stores compiled code Blocks. This is the only space with executable memory (although Codes may be allocated in “Large object space”, and those are executable, too).
- **Cell space, property cell space, and map space** that contain Cells, PropertyCells, and Maps, respectively. Each of these spaces contains objects which are all the same size and has some constraints on what kind of objects they point to, which simplifies collection.

Each of these spaces is composed of a set of pages. A Page is a contiguous chunk of memory allocated from the operating system with mmap (or [MapViewOfFile](https://docs.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-mapviewoffile) on Windows). Each page is 1MB in size, except for Large object space.

### Stack

This is the stack memory area and there is one stack per V8 process. This is where static data including method/function frames, primitive values, and pointers to objects are stored. The stack memory limit can be set using the --stack_size V8 flag.

## V8 Memory management: Garbage collection

When a program tries to allocate more memory on the Heap than that is freely available(depending on the V8 flags set) we encounter out of memory errors. An incorrectly managed heap could also cause a memory leak.

V8 manages the heap memory by garbage collection. In simple terms, it frees the memory used by orphan objects, i.e, objects that are no longer referenced from the Stack directly or indirectly(via a reference in another object) to make space for new object creation.

The garbage collector in V8 is responsible for reclaiming the unused memory for reuse by the V8 process.

V8 garbage collectors are generational(Objects in Heap are grouped by their age and cleared at different stages). There are two stages and three different algorithms used for garbage collection by V8:

### Minor GC (Scavenger)

This type of GC keeps the young or new generation space compact and clean. Objects are allocated in new-space, which is fairly small (between 1 and 8 MB, depending on behavior heuristics). Allocation in “new space” is very cheap: there is an allocation pointer which we increment whenever we want to reserve space for a new object. When the allocation pointer reaches the end of the new space, minor GC is triggered. This process is also called Scavenger and it implements Cheney’s algorithm. It occurs frequently and uses parallel helper threads and is very fast.

Let us look at the minor GC process:

The new space is divided into two equal-sized semi-spaces: to-space and from-space. Most allocations are made in from-space (except certain kinds of objects, such as executable Codes which are always allocated in old-space). When from-space fills up the minor GC is triggered.

### Major GC

This type of GC keeps the old generation space compact and clean. This is triggered when V8 decides there is not enough old space, based on a dynamically computed limit, as it gets filled up from minor GC cycles.

The Scavenger algorithm is perfect for small data size but is impractical for large heap, as the old space, as it has memory overhead and hence major GC is done using the Mark-Sweep-Compact algorithm. It uses a tri-color(white-grey-black) marking system. Hence major GC is a three-step process and the third step is executed depending on a fragmentation heuristic.
