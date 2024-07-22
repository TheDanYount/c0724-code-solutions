# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  It accesses anything stored in a html class attribute.
- How do you update the CSS class attribute of an element using JavaScript?
  element.className = "updatedValue"
- What is the `textContent` property of element objects?
  The text contained between opening and closing tags.
- How do you update the text within an element using JavaScript?
  element.textContent = "updatedText"
- Is the `event` parameter of an event listener callback always useful?
  No. In this instance we don't even use it.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  More complicated. Off the top of my head I would use indexOf(" ") on the textContent of the <p> with class click-count, then make 1 after that the start position for a slice (with no end argument), convert the result to a number i.e. Number(substr), increment that, and then set the textContent to `Clicks: ${whateverWe'reCallingThisVariable}`
- Why is storing information about a program in variables better than only storing it in the DOM?
  It's unorganized and creates clutter when looking at the DOM. Better to properly label and categorize data in an object and reference that obejct as needed.

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
