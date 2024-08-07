# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  Functions need a preceeding 'async' to mark them as asynchronous so that the 'await' keyword can be used within it. The 'await' keyword awaits the result of a promise.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  It's just a different way of writing the same thing. Rather than outlining instructions for what to do with a promise with .then and .catch, you can assign awaited the return of a promise to a variable.
- When do you use `async`?
  Put it before the 'function' keyword when you intend to use 'await' in the function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await when the result of an asynchronous function is needed to run subsequent code. Do not use await for synchronous code; a promise unfulfilled, a promise pending, is probably not what you want.
- How do you handle errors with `await`?
  With try and catch code blocks.
- What do `try`, `catch` and `throw` do? When do you use them?
  try, followed by a code block, should await a promise and then have some code to run should the promise be resolved. catch, followed by a parameter to handle a rejected promise, followed by a code block, should have some code to run given that the promise has been rejected. throw is an alternative to reject within promises.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  It references the promise itself, rather than its resolve or reject value. Rejections wouldn't get passed along in this scenario.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Not callback, as they (if we're using timeout's) simply run after other code. Right now I think I prefer promise.then and promise.catch. It just seems simpler than couching things in asymmetrical code blocks.

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
