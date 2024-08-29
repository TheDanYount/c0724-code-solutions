# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?
  As opposed to statically create a list? When a user might add to that list or when the number of list in that list might be updates in real time, like in an arrivals board at an airport.
- Why is it important for React components to be data-driven?
  Data-driven as oppose to data-informed? In many cases user input is not needed. If a user is using a program it can be assumed that they may want certain data. Their input should not be needed to pull everything up e.g. when you open up your desktop, there's a clock in the corner and you don't have to search for one.
- What `Array` method is commonly used to create a list of React components?
  The 'map' method.
- Why do components in a list need to have unique keys?
  So they can be more easily referenced later, referenced by their key, regardless of any future changes to their position in the list.
- What is the best value to use as a "key" prop when rendering lists?
  A key ought to be an identifier. In an exercise where species aren't classified by a numerical identifier, but we're still dealing with a list of species, the species' names would be good identifiers.

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
