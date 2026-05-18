# Testing Practice (Jest)

This project contains a set of small JavaScript functions implemented for practice with unit testing using Jest. The focus is on writing tests first or alongside implementation, then ensuring all tests pass.

## Functions implemented

The project includes the following functions:

* `capitalize(string)`

Returns the string with the first character capitalized.
* `reverseString(string)`

Returns the reversed version of the input string.
* `calculator object`

Provides basic arithmetic operations:
1. `add(a, b)`
2. `subtract(a, b)`
3. `multiply(a, b)`
4. `divide(a, b)`
* `caesarCipher(string, shift)`

Encodes a string using a Caesar cipher.
Wraps from z to a
Preserves letter case
Leaves punctuation, spaces, and symbols unchanged
* `analyzeArray(array)`

Returns an object containing:
1. average
2. min
3. max
3. length

Example:

```js 
analyzeArray([1, 8, 3, 4, 2, 6]);
// {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// }
```

## Testing setup

This project uses Jest for unit testing.

1. Installing Jest

`npm install --save-dev jest`

2. Setting up Babel
* Install Babel preset:

```bash
npm install --save-dev @babel/preset-env
```

* Create a babel.config.js file:

```js
export default {
     presets: [["@babel/preset-env", {
    targets: { node: "current" } }]],
};
```

### Why Babel is needed

Jest does not always fully support modern JavaScript module syntax (ESM) depending on configuration. Babel acts as a transpiler, converting modern JavaScript into a version that Jest can execute reliably in a Node environment.

This allows you to write code using modern syntax while still running tests without module compatibility issues.

## Running tests

Add the following script to package.json if not already present:

```js
"scripts": {
  "test": "jest"
}
```
Run tests:
```bash
npm test
```
