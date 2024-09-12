# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  POST, GET, PUT, and DELETE. No, code could be written to react to a request in any way. A sloppy way to handle a put request would be to add the new data and then delete the old data.
- What is Express middleware?
  Middleware can be accessed via specified method and path and has access to the current request, response, and the next bit of middleware. Syntactically, our express application object has methods performed on it, receiving 2 arguments, a path and a callback function, that's middleware. Error handling middleware gets a fourth parameter in its function in the pattern of error, request, response, and next.
- What is Express middleware useful for?
  Modifying requests, printing messages to the server to communicate how a request is being processed.
- How do you mount a middleware with an Express application?
  With method calls. Note that in addition to the HTTP CRUD methods (post, get, put, and delete), app.use can be used. app.use executes when its path is the beginning of the path in a request, not only when it matches the full path e.g. in this exercise, had I made my get method call with a path of '/', a use instead, it would have executed for every one of my requests to localhost:8080.
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  Request, response, and next.

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
