# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?
  A reusable block of code.
- Describe the parts of a function **definition**.
  The keyword "function", the function's name (optional), the parentheses-enclosed parameters (optional), the curly-braces-enclosed code block, and the return statement (optional), within the code block, which passes the result of the function back to its caller.
- Describe the parts of a function **call**.
  The function's name and then the parentheses-enclosed arguments that get passed into the function's parameters.
- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
  A function definition creates something new, a thing of the type defined by the keyword "function," whereas a function call merely uses that which has been created. A function definition includes all of the stuff a function does, but a function call only passes along arguments, to be mystically (not really) altered by the esoteric function.
- What is the difference between a **parameter** and an **argument**?
  A parameter is a placeholder, used in function definitions. An argument, used in function calls, is passed into the function and henceforth referred to by the parameter.
- Why are function **parameters** useful?
  A function can be not only repeatable, but reusable, meaning calling a greet function could be merely repeatable if all it did was log "Hello!," but could be reusable for different people if it accepted input and then responded to them by name e.g. greet("Brandon") could return "Hello Brandon!" and greet("Shawn") could return "Hello Shawn!" If a function is to give different output for different circumstances, those circumstances need to be given to the function as arguments, passed into the parameters. Another way to put it is that without parameters, functions would have to be written out with explicitly defined variables each time, and would indeed have to be re-written with the new variables each time, rather than just written once.
- What two effects does a `return` statement have on the behavior of a function?
  A return 1) passes a value back to the function call 2) stops running the code within the function's scope.
- What is the syntax for defining an arrow function?
  (params) => {stuff}, or even (params) => stuff --if the stuff is a one-line return statement.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It is assumed that the body is a return statement (excluding the keyword that is normally required to tell the computer that it's supposed to return the subsequent value). If the body is not a return statement (with the keyword excluded), it will throw an error.

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
