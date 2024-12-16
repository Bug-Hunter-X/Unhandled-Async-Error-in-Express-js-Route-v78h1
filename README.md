# Unhandled Async Error in Express.js Route

This repository demonstrates a common issue in Express.js applications: unhandled errors within asynchronous route handlers.  Improper error handling in asynchronous code can lead to server crashes and unexpected behavior.

## The Problem

The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation.  If the asynchronous operation throws an error, the error is not caught, causing the server to crash.

## The Solution

The `bugSolution.js` file demonstrates how to properly handle errors within asynchronous route handlers using `try...catch` blocks or middleware.  This prevents the server from crashing and allows for graceful error handling.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to run the buggy version.
5. Run `node bugSolution.js` to run the fixed version. 