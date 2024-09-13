# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  It lets us query postgres from our backend scripts.
- How do you tell `pg` which database to connect to?
  With a connectionString in the Pool method.
- How do you send SQL to PostgreSQL from your Express server?
  We query the database, typically with await db.query, where db is your new pg.Pool()
- How do you access the rows that get returned from the SQL query?
  With the rows property of the returned object.
- What must you always remember to put around your asynchronous route handlers? Why?
  Try and catch blocks, for error handling. Users should receive a response when an error occurs. Users are quit to give up on a site if there's an error and they don't know why. If you give them feedback they can correct errors in their requests, or may expect you to correct errors in the future if you tell them it's a server-side problem.
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  If you send sql to your database and allow users to write that sql, they can write code you didn't intend to execute. In 'pg', you can query a database with 2 arguments, the second being a paramter list. These parameters are safely formatted as strings, and they replace $N in query sql, where N is a number.

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
