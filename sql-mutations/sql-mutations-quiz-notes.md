# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Insert, select, update, and delete.
- How do you add a row to a SQL table?
  Using syntax in the pattern of:
  insert into "table_name" ("column_name1", "column_name2")
  values ('value_of_appropriate_type_1', 'value_of_appropriate_type_2')
  Note: every column must be given a value.
- How do you add multiple rows to a SQL table at once?
  Separate the values with commas.
- How do you update rows in a database table?
  Using syntax in the pattern of:
  update "table_name"
  set "column_name" = 'value'
  Note: using a 'where' specifier is essential here, unless you want to update every item to have the value as their value for the specified column.
- How do you delete rows from a database table?
  Using syntax in the pattern of:
  delete
  from "table_name"
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  To ensure you're not applying your CRUD operations to every row.
- How do you accidentally delete or update all rows in a table?
  By being in a state of mind in which you'd run the following code:
  delete
  from "table_name"
  -or-
  update
  from "table_name"
  set "column_name" = 'value'
- How do you get back the modified row without a separate `select` statement?
  returning \*;
- Why did you get an error when trying to delete certain films?
  I ran into a 'forgein key constraint', which requires that films exist if they're referenced in the table "castMembers".

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
