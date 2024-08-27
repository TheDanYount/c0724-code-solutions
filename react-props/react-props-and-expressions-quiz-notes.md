# react-props-and-expressions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are props in React?
  Properties passed to a component in an object.
- How do you declare and access props in a component?
  You access a prop by destructuring it from the object received by the component function, and of course in typescript this requires declaring a type e.g. type PropObject = {propname: valuetype}, and within the parameters: {propname}: PropObject and within the component's jsx: {propname}.
- How do you pass props to a component?
  You pass a prop like an HTML attribute e.g. <Component componentProp="prop value">.
- How do you write JavaScript expressions in JSX?
  Within curly braces.

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
