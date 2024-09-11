# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  When you refer to a primary key of another table as a field in your current table, it is being used as a foreign key.
- How do you join two SQL tables? (Provide at least two syntaxes.)

1. select "columns_to_join"
   from "table_A"
   join "table_B" using ("table_B_primary_key_table_A_foreign_key")
2. select "a"."column"
   "b"."column"
   from "table_A" as "a"
   join "table_B" as "b" on "a"."originId" = "b"."id"

- How do you temporarily rename columns or tables in a SQL statement?
  Using "as", as shown above. This is called aliasing.
- How do you create a one-to-many relationship between two tables?
  Use a foreign table's primary key as a column in your current table.
- How do you create a many-to-many relationship between two tables?
  A bad idea would be to use arrays to have tables refer to multiple elements from each other. This wouldn't create the relationship. Create a new table, a 'join' table, which references both of the other tables.

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
