# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When it is rendered.
- What is a React Effect?
  A React Effect is a way to run code after rendering. If you're waiting on asynchronous code, it's much better to use an effect to control their behavior then re-rendering the page on a loop until some state has been updated.
- When should you use an Effect and when should you not use an Effect?
  You should use an Effect to coordinate with 'external' systems. If you merely need to update a page when a controlled state is updated, use an event instead.
- When do Effects run?
  By default, on every render. One should add a second argument to a useEffect, an array of dependencies, and then the useEffect will only rerun when a dependency is changed.
- What function is used to declare an Effect?
  The useEffect hook.
- What are Effect dependencies and how do you declare them?
  They are things that are checked that determine whether or not an Effect runs on that render. They are declared as a second argument within an Effect.
- Why would you want to clean up from an Effect?
  If an Effect creates something, it shouldn't be perpetually duplicated every time the Effect is called again. If that something isn't overridden by subsequent calls, it ought to be destroyed, destroyed by a cleanup function.
- How do you clean up from an Effect?
  Have your first argument in an Effect return a 'cleanup function.' This function will be run before every remount. If an Effect creates a dom element and adds it as a child to the page, a cleanup function might look like 'return element.remove();'.
- When does the cleanup function run?
  It runs not on the initial mounting, but on every remount.

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
