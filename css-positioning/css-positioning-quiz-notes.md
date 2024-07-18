# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static
- How does setting `position: relative` on an element affect document flow?
  It maintains the space of its static positioning, but can be offest from it, so it does not affect the document flow any differently than if it was position: static.
- How does setting `position: relative` on an element affect where it appears on the page?
  It doesn't. the default offsets are all 0.
- How does setting `position: absolute` on an element affect document flow?
  The element is removed from the document flow.
- How does setting `position: absolute` on an element affect where it appears on the page?
  It appears at the start of its parent. If given an offset, it appears in accordance with that offset from its closest ancestor without static positioning.
- How do you constrain an absolutely positioned element to a containing block?
  Make sure that it's its most recent ancestor without static positioning, and give the absolutely positioned element offsets, even if they're set to 0, otherwise it will move to the top-left of its parent. Also note: I said set its offsets, plural, because setting only 1 only it only along that axis, but it still uses its parent for the other... better yet, just use the parent are the ancestor without static positioning.
- What are the four box offset properties?
  top, bottom, right, and left.

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
