# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  fetch
- What two things need to be done to properly handle HTTP request errors? Why?

1. We need to check for errors
2. We need to inform the user the nature of the error
   Why:
3. A contacted server will not automatically throw an error. All errors due to processed-reject need to be thrown.
4. Informed errors are frustrating, but bearable. Unknown errors get users to quit using your site.

- How can `useEffect` be used to load data for a component?
  We can use asynchronous functions within a useEffect to talk to external servers. Once we've obtained a response, we can trigger a re-render by calling a state setter.
- How do you use `useEffect` to load component data just once when the component mounts?
  Don't include things that change in the dependency array.
- How do you use `useEffect` to load component data every time the data key changes?
  Ensure that the changing data is a part of the dependency array.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query, Vercel SWR, Apollo Client, and RTK-Query.

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
