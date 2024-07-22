# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To ensure that their value is what we expect it to be when we expect it to be so.
- What is a "model"?
  A representative structure. In the context of the Document Object Model (DOM), the objects present in a document are modeled in a structure that elucidates their hierarchy.
- Which "document" is being referred to in the phrase Document Object Model?
  The HTML document one has opened.
- What is the word "object" referring to in the phrase Document Object Model?
  Elements contained within your local version of the webpage.
- What is a DOM Tree?
  A structure that uses indentation to represent things are are branched off from the main flow of the webpage. This is useful because if one wants to analyze a section of a webpage, if they've organized their HTML properly, they can easily skip past irrelevant sections and open up the relevant one. Without the DOM tree, one would have to scroll through all of their code to find what they need to edit, a time-consuming process, especially if the relevant code includes lots of similar sections.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector(), document.getElementByClassName()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  Querying the dom requires a lot of processing. By querying the dom initially storing the values a client might need, you can then process the requests they might make faster.
- What `console` method allows you to inspect the properties of a DOM element object?
  dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  If the script is loaded before the things it references it won't be able to reference them.
- What does `document.querySelector()` take as its argument and what does it return?
  A string/strings (1+); it returns an object.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  A string/strings (1+); it returns a node list of objects (which can be turned into an array using the handy Array.from(nodeListReference) method).

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
