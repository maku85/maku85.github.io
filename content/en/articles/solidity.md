---
title: Solidity
description: Solidity is an object-oriented, high-level language for implementing smart contracts. Influenced by C++, Python and JavaScript, is a curly-bracket language and is designed to target the Ethereum Virtual Machine (EVM).
img: /articles/images/solidity.webp
tags:
  - solidity
published: false
---

Solidity is statically typed, supports inheritance, libraries and complex user-defined types among other features.

## Source file layout

Every source file should start with a comment indicating its license:

```solidity
// SPDX-License-Identifier: MIT
```

The `pragma` keyword is used to enable certain compiler features or checks. A pragma directive is always local to a source file, so you have to add the pragma to all your files if you want to enable it in your whole project.

```solidity
pragma solidity ^0.8.0;
```

By using `pragma abicoder v1` or `pragma abicoder v2` you can select between the two implementations of the ABI encoder and decoder.

## Structure of a Contract

Contracts in Solidity are similar to classes in object-oriented languages. Each contract can contain declarations of:

- **state variables** - variables whose values are permanently stored in contract storage.
- **functions** - executable units of code defined inside/outside of contract. Function Calls can happen internally or externally and have different levels of visibility towards other contracts. Functions accept parameters and return variables to pass parameters and values between them.
- **function modifiers** - function that can be used to amend the semantics of functions in a declarative way.
- **events** - convenience interfaces with the EVM logging facilities.
- **errors** - allow to define descriptive names and data for failure situations.
- **struct types** - custom defined types that can group several variables.
- **enum types** - used to create custom types with a finite set of constant values.

## Types

Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified.

The concept of 'undefined' or 'null' values does not exist in Solidity, but newly declared variables always have a default value dependent on its type.

Solidity provides several elementary types which can be combined to form complex types:

- **booleans** - `true` and `false`
- **integers** - `int`/`uint` (signed and unsigned integers)
- **fixed point numbers** - `fixed`/`ufixed` (signed and unsigned fixed point number)
- **address** - `address`/`address payable`, a 20 byte value. `Payable` is same as `address` but with additional memebers `transfer` and `send`.
- **fixed-size byte arrays** - `bytes1`, `bytes2`, ..., `bytes32` hold a sequence of bytes from one to up to 32.
- **dynamically-sized byte array** - `bytes` (byte array) and `string` (UTF-8-encoded string).
- **address literals** - hexadecimal literals that pass the address checksum test.
- **rational and integer literals**
- **string literals and types**
- **unicode literals**
- **hexadecimal literals** - prefixed with the keyword `hex` and are enclosed in double or single-quotes.
- **enums**
- **user defined value types**
- **function types**
