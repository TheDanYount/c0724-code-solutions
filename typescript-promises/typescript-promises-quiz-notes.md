# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  It's how JavaScript handles promises. It continuously checks to see if they've been fulfilled/rejected, while handling other operations in between loops, handling responses as they come in.
- What are the three states a Promise can be in?
  Pending, fulfilled, and rejected.
- How do you handle the fulfillment of a Promise?
  With a .then method (the argument of which is a function for what to do when the promise is fulfilled).
- How do you handle the rejection of a Promise?
  With a .catch method (the argument of which is a function for what to do when the promise is rejected).

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
