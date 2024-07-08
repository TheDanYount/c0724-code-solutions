# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?
  A store of value that includes key-value pairs.
- What are object properties?
  Properties are things that are stored inside of an object. They can be referenced by their key. Referencing them gives one the value of the value that corresponds to their key e.g. with the object const car = {axels: 2,}, car.axels === 2.
- Describe object literal notation.
  Object literal notation is a pair of curly brackets, with optional key-value pairs in between, separated from other pairs by commas, and from each other by a colon.
- How do you remove a property from an object?
  Using the delete keyword.
- What are the two ways to get or update the value of a property?
  Bracket notation and dot notation. Bracket notation is mandatory when a key has a space and can be given variables, unlike dot notation.
- What is the purpose of interfaces in TypeScript?
  Interfaces give expected types to properties of objects. If the wrong type of value is put in an object, it will throw an error. Also note that interfaces can have optional values. An object built on an interface yet lacking an optional value will not throw an error.
- What are two different ways to describe the shape of an object in TypeScript?
  With interfaces and types.
- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?
  Optional properties can be included in an object, but don't have to be. They are useful when an object has no data for several optional properties, but should still be considered a legitimate object.

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
