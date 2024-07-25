# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The most-specific (as in most indented in a DOM hierarchy) html element that could be referenced by the event i.e. a click event may be listened for on a div of a webpage, but if the user clicked on a button element within that container, the button element will be the event target, not the div.
- What is the effect of setting an element to `display: none`?
  It will be removed from the flow of the webpage, meaning it's not only invisible, but no longer takes up space either.
- What does the `element.matches()` method take as an argument and what does it return?
  It takes a string as an argument and it returns a boolean telling whether or not the string is of a css selector that could be used to reference the element.
- How can you retrieve the value of an element's attribute?
  element.getAttribute("attribute-name")
- At what steps of the solution would it be helpful to log things to the console?
  Whenever a change does not manifest visibly, especially when a value is uncertain e.g. if you're assigning an event target to a variable, console.log that and make sure you're capturing what you think you're capturing (and that when you click wrongly the wrong input doesn't progress the function).
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  I would give each .tab it's own event listener with nearly identical callback functions, adding a fourth such listener and callback function for the latest tab.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  I would have to list every matching element (matching to the dataset.view) and assign them each a new class that omitted "hidden", and I would have to list every non-matching element and assign them each a new class including "hidden."

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
