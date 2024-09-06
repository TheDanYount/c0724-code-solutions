# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  The dialog element displays modals. Modals, according to chatGPT 'display[] content in a layer that overlays the main content of the page.' I find I'm quite happy with this definition, as that is indeed what separates dialog elements from other elements, that they're removed from the document flow. Additionally, dialog elements have in-built methods: show(), showModal(), and close().
- How do you show and hide a modal dialog?
  With show()/showModal() and close(). Note that showModal() centers the modal and grays out the rest of the page.
- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  Normally, we pass them props based on state to allow manipulation. Dialog elements' show status is created by its mounting to the DOM, which we can't touch under ordinary circumstances.
- How do you call the dialog element's functions in React?
  We use the useRef hook. We can then reference the DOM element with useRef(DOMElement).current and call its functions from there.
- How can you render nested components or JSX elements in React?
  If you're asking how we can guarantee that they've been rendered before we manipulate them, we can use a useEffect hook. In this specific case, we only have functionality in response to the use clicking a button, so it must have been rendered first for that to happen.

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
