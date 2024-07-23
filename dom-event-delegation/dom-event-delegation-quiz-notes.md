# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  "[T]he object onto which the element was dispatched" --or the most specific element clicked as I understand it.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because events "bubble" up their dom hierarchy. Note that they don't stop at their nearest event listener i.e. if you create a "click" event listener on the body, it will call its callback function in addition to the list-item event listener calling its function.
- What DOM element property tells you what type of element it is?
  .tagName, though .nodeName works as well. The differences between the two are that .nodeName returns #text rather than undefined for text nodes, and tagName works on archaic IE5.5.
- What does the `element.closest()` method take as its argument and what does it return?
  element.closest() takes a CSS selector and returns the nearest match traveling up an element's dom tree. This includes ancestors and also the element itself.
- How can you remove an element from the DOM?
  element.remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Add an event listener to their parent. To make different elements do different things, find their "event.target"s (their event.currentTarget will be the same as event.currentTarget finds the element with the event listener) and set out a course of action to follow for each target (presumably with a switch or if statement).

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
