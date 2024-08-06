# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
  - What should the callback function do?
  - What is `Array.forEach` useful for?
    It loops through each value of an iterable. The callback function should include code that references each value in the array. forEach is useful for looping through an array by value, and then being able to return the index.
- `Array.map`:
  - What does `Array.map` do?
  - What should the callback function return?
  - What is `Array.map` useful for?
    It loops through an array, replacing its values with the returns of a callback function. The callback function should return the new value for that index. The map method is useful for creating an array out of an existing array e.g. imagine you have prices in dollars and want that re-written in terms of cents.
- `Array.find`:
  - What does `Array.find` do?
  - What should the callback function return?
  - What is `Array.find` useful for?
    It loops through an array until it finds a value that matches the condition in the callback function. It then returns the value, or undefined if no such value is found. The find method is useful for linking to a specific object with a specific property from an array.
- `Array.filter`:
  - What does `Array.filter` do?
  - What should the callback function return?
  - What is `Array.filter` useful for?
    It loops through an array, creating a new array with the old values filtered. The callback function returns the original value if and only if it meets the condition. It is useful for getting rid of bad data. e.g. imagine you give a personality assessment to potential employees. Within the assessment you have several question pairs that are essentially identical (but on different pages). If more than one pair is answered the same way, the candidate is probably lying. The results of non-lying candidates you might want to review and measure against each other. You can use the filter method to get rid of applicants you won't be looking further into.

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
