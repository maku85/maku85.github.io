---
date: 2021-01-05T09:00:00.000Z
title: Node.js best practices
description: What is happening under the hood
img: https://images.unsplash.com/photo-1508726096737-5ac7ca26345f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80
tags: javascript, async
published: false
source: https://github.com/goldbergyoni/nodebestpractices#readme
---

## Project Structure

- Structure your solution by components: partition your code into components, each gets its folder or a dedicated codebase, and ensure that each unit is kept small and simple.
- Layer your components, keep the web layer within its boundaries: each component should contain 'layers' - a dedicated object for the web, logic, and data access code.
- Wrap common utilities as npm packages
- Separate Express 'app' and 'server'
- Use environment aware, secure and hierarchical config: a perfect and flawless configuration setup should ensure (a) keys can be read from file AND from environment variable (b) secrets are kept outside committed code (c) config is hierarchical for easier findability.

## Error Handling

- Use Async-Await or promises for async error handling
- Use only the built-in Error object
- Distinguish operational vs programmer errors: operational errors (e.g. API received an invalid input) refer to known cases where the error impact is fully understood and can be handled thoughtfully. On the other hand, programmer error (e.g. trying to read an undefined variable) refers to unknown code failures that dictate to gracefully restart the application
- Handle errors centrally, not within a middleware
- Document API errors using Swagger or GraphQL
- Exit the process gracefully when a stranger comes to town: when an unknown error occurs (a developer error, see best practice 2.3) - there is uncertainty about the application healthiness. Common practice suggests restarting the process carefully using a process management tool like Forever or PM2
- Use a mature logger to increase error visibility
- Test error flows using your favorite test framework
- Discover errors and downtime using APM products
- Catch unhandled promise rejections
- Fail fast, validate arguments using a dedicated library
- Always await promises before returning to avoid a partial stacktrace

## Code Style

- Use ESLint
- Node.js specific plugins: on top of ESLint standard rules that cover vanilla JavaScript, add Node.js specific plugins like eslint-plugin-node, eslint-plugin-mocha and eslint-plugin-node-security
- Start a Codeblock's Curly Braces on the Same Line
- Separate your statements properly
- Name your functions
- Use naming conventions for variables, constants, functions and classes
- Prefer const over let. Ditch the var
- Require modules first, not inside functions
- Require modules by folders, as opposed to the files directly
- Use the === operator
- Use Async Await, avoid callbacks
- Use arrow function expressions (=>)

## Testing And Overall Quality

- At the very least, write API (component) testing
- Include 3 parts in each test name
- Structure tests by the AAA pattern
- Detect code issues with a linter
- Avoid global test fixtures and seeds, add data per-test
- Constantly inspect for vulnerable dependencies
- Tag your tests
- Check your test coverage, it helps to identify wrong test patterns
- Inspect for outdated packages
- Use production-like environment for e2e testing
- Refactor regularly using static analysis tools
- Carefully choose your CI platform
- Test your middlewares in isolation
