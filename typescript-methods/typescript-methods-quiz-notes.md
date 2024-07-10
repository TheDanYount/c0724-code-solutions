# typescript-methods-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To check if their values matches our expectations.
- What is a method?
  An in-built function of an object.
- How is a method different from any other function?
  Methods are properties of objects.
- How do you remove the last element from an array?
  The Array.pop() method.
- How do you round a number down to the nearest integer?
  The Math.floor() method.
- How do you generate a random number?
  The Math.random() method generates a random number between 0 and 1 (excluding 1). Multiply this by your desired range. If you desire a random integer, multiply instead by your desired range + 1, and then use Math.floor().
- How do you delete an element from an array?
  Pop deletes an element from the end, shift from the beginning, and splice deletes elements starting at the array's index of its first argument, as many as are specified in its second argument (and can then add new elements, the subsequent arguments).
- How do you append an element to an array?
  The Array.push() method.
- How do you break a string up into an array?
  The string.split() method. Give it an argument as to what to split on, usually a space. It might be advantages to first create a new string, using regular expressions to capture every non-punctuation character first, and then perform the split on that string.
- Do string methods change the original string? How would you check if you weren't sure?
  No. Strings are immutable. You can use console.log() to check.
- Is the return value of a function or method useful in every situation?
  No. Array.unshift() and Array.push() both return the new length of the array. I imagine these are seldom used.
- How do you get a collection of an objects keys?
  By using the Object.keys() method.
- How do you get a collection of an objects values?
  By using the Object.values() method.
- How do you get a collection of both an objects keys and values?
  By using the Object.entries() method.

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
