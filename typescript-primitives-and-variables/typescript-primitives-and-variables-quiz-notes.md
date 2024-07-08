# typescript-primitives-and-variables-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of variables?
  To store values so that they can be referenced with the variable.
- How do you **declare** a variable?
  Use "let" or "const" (the former for variables that change, the latter for those that do not).
  Also note that "var" works, but is considered archaic, and it has global scope.
- How do you initialize (**assign a value to**) a variable?
  Use the assignment operator to the declared variable's right, "=", and then write the value
  you wish to assign.
- What characters are allowed in variable names?
  Letter, numbers, underscore, and dollar-sign, though they cannot start with numbers.
- What does it mean to say that variable names are "case sensitive"?
  That if one sets up "theValue" and "TheValue", one has created two variables, not one, and
  they will each store a value, and referencing one will not have anything to do with the other.
- What is the purpose of a string?
  To store multiple characters and manipulate them using string methods.
- What is the purpose of a number?
  To store a number, in javascript both integers and floating points are stored as numbers.
- What is the purpose of a boolean?
  A boolean stores a true/false value. Booleans are useful in if statements and unlike other
  variables do not have to be compared against something, as the goal of the comparison is to
  create a boolean e.g. with a string an if statement might look like "if(name === "Daniel"),
  whereas with a boolean it might look like "if(nameAssignedCorrectly).
- What does the `=` operator mean in JavaScript?
  It is the assignment operator. It assigns the value on the right to the variable on the left.
- How do you update the value of a variable?
  Simply re-assign it (assign the variable is not a const variable).
- What is the difference between `null` and `undefined`?
  Null is an object that has to be assigned. Undefined is the default value for un-initialized
  variables and functions that do not return anything explicitly.
- Why is it a good habit to include "labels" when you log values to the browser console?
  Including labels is a good idea so that one can make sense of logged values without having
  to switch back and forth between one's output and one's code e.g. to determine to what
  variable "true" refers to.
- Give five examples of JavaScript primitives.
  Strings, numbers, booleans, undefined, and bigInts.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
