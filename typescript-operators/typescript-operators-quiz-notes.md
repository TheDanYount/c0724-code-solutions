# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  And and or are operators that evaluate the expressions before and after themselves. And will only run the code after itself if the code before it is true. Or will only run the code after itself if the code before it is false.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Think of short circuiting like cutting the power to the code after the logical operators under certain circumstances (if false for && and if true for ||).
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing operator checks if the code before it is undefined or null, and only then does it run the subsequent code. The or operator goes by truthy/falsy values instead.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  While the ternary operator does work much like an if/else statement, including the fact that it can be chained, the ternary operator can be used to initialize a constant. It can also make statements a bit more concise i.e.
  if(condition) {
  return true;
  } els {
  return false;
  }
  is much less concise than
  return condition ? true : false;
- What is the `?.` (optional chaining) operator? When would you use it?
  It will return undefined if a property does not exist. It's a way to reference a property you're not sure exists without causing an error. It has a lot of applicability in typescript, and would otherwise typically be replaced by an if statement, and when chaining optional chaining operators, many if statements.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread operator can be used to spread the index-values/properties of a array/object into another array/object, rather than pushing/setting each index-value/property. Additional index-values/properties can then be added within the constructor.
- What data types can be spread into an array? Into an object?
  Arrays, objects, respectively.
- How does spread syntax differ from rest syntax?
  While they both use the same keys for their operator, rest syntax puts values into an array. Spread syntax spreads values out from an array.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
