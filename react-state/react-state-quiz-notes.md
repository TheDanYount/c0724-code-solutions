# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are functions that can access 'state', the means by which a local variable has persistence. Of course this begs the question, why not use a global variable? When dealing with components, functionality should be compartmentalized so that, for example, a button does not have to be re-configured when you decide to put that button component in your page.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  They must be named "use[capitalLetter]...", they can only be used by React components and other hooks, and they must be at the top level of a function (meaning not nested).
- What is the purpose of state in React?
  To give local variables persistence.
- Why can't we just maintain state in a local variable?
  Because normal local variables are reset for every function call. In React, this would mean with every render.
- What two actions happen when you call a `state setter` function?

1. The new value of state is stored
2. The app is re-rendered (and then the new value of state is updated)

- When does the local `state variable` get updated with the new value?
  After re-rendering.

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
