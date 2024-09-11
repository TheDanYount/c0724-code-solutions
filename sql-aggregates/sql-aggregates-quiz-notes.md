# sql-aggregates-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are some examples of aggregate functions?
  sum(), count(), avg(), every(), and min().
- What is the purpose of a `group by` clause?
  While where can limit your selection to those with a particular value, group by can still select everything, but return that everything in batches, batches containing all variants of a value within a specified column. e.g.:
  select count(_) as speciesWithFourLegs
  from "animalList"
  where "legs" = 4
  may return a table with 1 column of speciesWithFourLegs and 1 row of 2700.
  select count(_) as species, "legs"
  from "animalList"
  group by "legs"
  may return a table with 2 columns of legs and species and 3 rows,
  of 2, 182, and 4, 2700, and 6, 99,999.

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
