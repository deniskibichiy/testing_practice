## Unit Testing
In Unit testing, you divide your software app into small isolated units and then you write automated tests that verify that those units work as expected

The primary goal of TDD is specification and not validation - it provides a way to think through your requirements or design before you write the functional code, implying that TDD is both an important agile requirement and agile design technique.

Unit tests keep complexity from overwhelming
### Importance of Unit Testing
* Prevents wastage of time in debugging
* Reduces the cost of change
* Improves design
* Encourages refactoring
* Builds safety net to defend against other programmers
* Forces the programmer to slow down and think
* Speeds up development by eliminating waste.

### Common steps in TDD
1. Write a failing test
2. Run the test suit
3. Implement the minimun code required to pass
4. Refactor to improve code design or add new tests and continue with development if it passes or go back to making a few changes to make 
#### Alternative version of the three steps
1. Red: Write a little test that doesn't work, perhaps doesn't even compile at first
2. Green: make the test work quickly, committing whatever sins are necessary in the process
3. Refactor: eliminate all the duplication

### Why it is best practice to write tests first
It is harder to write tests later than before

it is hard to figure out what tests to write

We only write code when there is a test that requires that code to exist.


## Approaches to Unit Testing
### Triangulation
Simplest and pure

Gives a good feel for test first development

## Using `jest` for Testing
Jest is a JavaScript testing framework commonly used with:
- Node.js
- React
- Frontend tooling ecosystems

In a Test-Driven Development workflow, `jest` is used to write automated tests before implementing functionality. 

1. Installing `jest`:
```bash
npm install --save-dev jest
```
2. Process flow of using `jest`
* Write the test first:
```js 
    test("adds 1 + 2 to equal 3"), () => {
        expect(sum(1,2)).toBe(3);
    };
```
Write the implementation
```js
    function sum(a,b) {
        return a + b;
    }
```
The purpose of testing is not only to attain correctness but also:
- Better design decisions
- Safer refactoring
- Reduced Regressions
- Confidence during development

Jest provides:
- a test runner
- assertion utilities (`expect`)
- test grouping (`describe`)
- mocking utilities
- snapshots
- async testing support

Jest automatically detects files such as:
```bash
.test.js
.spec.js
```
Jest then executes them when running
`npm test`
### Jest, ESM, and Babel
Jest traditionally uses CommonJS(CJS)

By default, Jest is designed around Node.js `CommonJS` syntax
```js
const sum = require("./sum")

module.exports = sum;
```
However, modern JavaScript primarily uses ES Modules(ESM)
```js
import sum from "./sum.js"
export default sum;
```
2. Babel solves the incompatibility problem

Jest does not fully recognize ESM syntax out of the box in many setups

Without configuration, using ESM such as 
`import`
`export`
produces errors such as 
`Cannot use import statement outside a module`

Babel is therefore used as a transpilation layer to convert
`import sum from "./sum.js"`
into
`const sum = require("./sum")` before jest executes the code
3. Setting up Babel
-Install babel preset:
```bash
npm install --save-dev @babel/preset-env
```
- create `babel.config.js`
```js
export default {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```
- Babel allows the project to:
- Use modern import/export
- Keep jest functioning normally
- Maintain consistent syntax across the codebase

4. ESLint and Jest globals

Global functions provided by jest:
```js
test()
expect()
describe()
```
The functions above are automatically available during test execution

ESLint may trigger error reports such as 
```bash
"test" is not defined
```
This is because ESLint does not automatically know about Jest globals

To solve the above problem:
```js
import {test, expect} from "@jest/globals";
```

### Using Matchers in Jest
Jest uses matchers to compare actual values against expected outcomes

Basic structure:
```js
expect(actualValue).matcher(expectedValue);
```
#### Common Matchers:
1. `toBe()`: Strict Equality

Uses `Object.is` for comparison
```js 
test("adds numbers correctly", () => {
    expect(2+2).toBe(4);
});
```
Best works for:
* numbers 
* strings
* booleans
* reference equality checks
Limitation: deos not compare object contents
2. `toEqual()`: Deep Equality
```js
test("compare objects", () => {
    const data = {one:1};
    data.two = 2;

    expect(data).toEqual({one:1, two: 2});
});
```
Useful for:
- Objects
- Arrays
- Nested Structures

3. `not`: Negation

Useful for inverts matcher logic
```js
test("Value should not be zero", () => {
    expect(5).not.toBe(0);
});
```
## Isolation and its Importance in testing
Isolation implies that only method should be tested at time.

The test for one function ideally should not depend upon an external function behaving correctly, especially if that function is being tested elsewhere. 

This allows for you to narrow down the cause of a test failure, in case one occurs, as quickly as possible. 
## Pure Functions and their benefits
Pure functions are functions that always return the same result if the same arguments are passed in, and does not depend on any state, or data, change during a program's execution. 

Pure functions do not produce any observable side effets such as network requests, input and output devices, or data mutation.

A pure function must not depend on an outside variable

### Observable side effects
This refers to any interaction with the outside world from within a function. Such interactions could include changing the variable that exists outside the function or calling another method from within a function. 

Examples of functions side effects
* Making a HTTP request
* Mutating data
* Printing to a screen or console
* DOM Query or Manipulation
* Math.random()
* Getting the current time

A pure function must not contain any side effect

### Importance of Pure Functions in JS
Pure functions play a critical role in Functional Programming.

1. #### Testability and Refactoring
Pure functions are immediately testable since they will always  produce the same result if you pass in the same argument. 

They allow for easier refactoring since you can refactor a pure function without needing to worry about unintended consequences in the attached side effects.