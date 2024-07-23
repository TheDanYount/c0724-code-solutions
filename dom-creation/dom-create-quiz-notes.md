# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No. It merely creates one, disconnected from any page until it's appended.
- How do you add an element as a child to another element?
  Typically with the append method of the element. The appendChild method works for adding a single child, and the prepend method adds children to the beginning of a parent (i.e. before any other already present children).
- What do you pass as the arguments to the `element.setAttribute()` method?
  The attribute's name and then the value you wish to set the attribute to.
- What steps do you need to take in order to insert a new element into the page?

1. Create the element
2. Append the element to a part of the page e.g. the body of the HTML document

- What is the `textContent` property of an element object for?
  The text, not merely currently visible text, contained between the element's opening and closing tags.
- Name two ways to set the `class` attribute of a DOM element.

1. element.className = "[desired new class(es)]"
2. element.setAttribute("class", "[desired new class name]")

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

1. It can be called multiple times to perform a task multiple times, rather than writing out the code again and again for the task.
2. It makes the code organized and easy-to-read

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
