# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To check that their value is what we expect it to be when we expect it to be so.
- What is the purpose of events and event handling?
  Events are the subset of occurrences that can trigger a response in a programming language. Event handling is the process by which we make an event do something i.e. trigger a function.
- Are all possible parameters required to use a JavaScript method or function?
  No, but if you rely on data from a parameter when it hasn't been passed anything (and is therefore undefined), it could cause problems.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener(event, function)
- What is a callback function?
  A function defined to be called later.
- What object is passed into an event listener callback when the event fires?
  The event itself.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  Regarding mouse events, the event-target is the object that the mouse interacted with. If I wasn't sure I would create a script to test my hypothesis, if that failed: google, if that failed: Brandon. Part of my googling would include looking on mdn. Mdn would include more information on relevant topics.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first sets up an event listener that will call the function handleClick and pass it the click event. The second calls the handleClick function, and having failed to pass a function reference, does not set up the event listener (or in typescript, it throws an error).

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
