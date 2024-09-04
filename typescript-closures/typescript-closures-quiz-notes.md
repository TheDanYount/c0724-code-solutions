# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  When a function is declared.
- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure. When a function definition is assigned to a variable, it also includes a closure, that closure contains all in-scope variables.
- What values does a closure contain?
  The variables in the local scope.
- When is a closure created?
  When a function is declared, but this only matters if the function definition is stored, because the closure is stored along with it, allowing the potential re-accessing of a variable one might have thought recreated with its initial value.
- How can you tell if a function will be created with a closure?
  I assume this question means how can I tell if a function will have variables in its closure. Simply look for variables in its scope. Of course, this only causes potential issues if the function definition is stored and can be re-referenced i.e.
  runFunction();
  ...
  runFunction(); is not a problem, but
  const x = runFunction();
  x();
  ...
  x(); will not take any changes to variables into account, because the variables stored in the closure are copies of the ones that may be referenced, not references to them (of course this only matters if runFunction returns a function definition).
- In React, what is one important case where you need to know if a closure was created?
  If you're setting a state within an Effect. I recommend not doing so. Another case is when an Effect dependency is a function definition. This will update on every render, causing endless re-renders. You can store not merely an identical function, but the same one, with use of useCallback. If this function will change at some point and you want it to trigger a render, simply add the change you need to monitor as a dependency of the useCallback.

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
