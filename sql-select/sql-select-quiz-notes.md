# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  Structured Query Language is an imperative language rather than declarative. You tell it the results you want, not how to get them.
- How do you retrieve specific columns from a database table?
  Using syntax in the pattern of: select "column1", "column3", "column97" from "database";
- How do you filter rows based on some specific criteria?
  Using syntax in the pattern of: where "criteria" operator 'value'
- What are the benefits of formatting your SQL?
  You get only the data you want, and you can order that data if you want, far more efficient than simply selecting everything form a database and sorting through it manually.
- What are four comparison operators that can be used in a `where` clause?
  =, >, <, and !=. Apparently >= and <= work too.
- How do you limit the number of rows returned in a result set?
  By ending the query with syntax in the pattern of limit num; (where num is an integer)
- How do you retrieve all columns from a database table?
  Using syntax in the pattern of: psql -d database_name -c "\d table_name". Note that the -d flag let's psql know that the next word is a database name and the -c flag lets you run quote-enclosed commands you can't run without itself.
- How do you control the sort order of a result set?
  Using syntax in the pattern of: order by "column". Note that this can be followed by a "desc" to switch from the default ascending order to descending order.

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
