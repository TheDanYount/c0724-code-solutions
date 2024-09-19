# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  To create global variables.
- What values can be stored in context?
  Any type.
- How do you create context and make it available to the components?
  By using createContext to create the object and then using the ContextName.Provider's value property to hold the value you want to access in children.
- How do you access the context values?
  Use useContext in the component you want to extract it into.
- When would you use context? (in addition to the best answer: "rarely")
  Whenever you need access to a global variable i.e. when passing a variable down to children via a prop is inconvenient such as when you would need to pass the child down several layers of components.

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
