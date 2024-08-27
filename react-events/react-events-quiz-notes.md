# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  Something that triggers a response, the running of certain lines of code, sometimes provoked by a user, such as by clicking.
- What is an "event handler"? Which component declares the handler?
  An event handler is a function that takes care of what happens when an event occurs.
- How do you pass an event handler to a React component?
  By assigning it as a function definition to an event handler prop e.g. I passed the handleButtonClick event handler by giving the Button component the prop of 'onButtonClick' (a custom name) and the value of {handleButtonClick};
- What is the naming convention for event handlers?
  Use names in the pattern of handle[Event] e.g. handleButtonClick.
- What is an "event handler prop"? Which component declares the prop?
  An event handler prop is a prop that passes the event handler to a component. It is declared within a parent component.
- What are some custom event handler props a component may wish to define?
  onButtonClick, onPromiseResolve, onTimeoutCompletion
- What is the naming convention for custom event handler props?
  Use names in the pattern of on[Event] e.g.onButtonClick.

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
