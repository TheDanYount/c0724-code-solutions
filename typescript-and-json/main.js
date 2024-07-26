'use strict';
const fellowship = {
  isbn: '978-0547928210',
  title: 'The Fellowship of the Ring',
  author: 'J.R.R. Tolkien',
};
const twoTowers = {
  isbn: '978-0547928203',
  title: 'The Two Towers',
  author: 'J.R.R. Tolkien',
};
const returnOfTheKing = {
  isbn: '978-0547928197',
  title: 'The Return of the King',
  author: 'J.R.R. Tolkien',
};
const shelf = [fellowship, twoTowers, returnOfTheKing];
console.log('shelf:', shelf);
console.log('Type of shelf', typeof shelf);
const JSONShelf = JSON.stringify(shelf);
console.log('JSONShelf', JSONShelf);
console.log('Type of JSONShelf', typeof JSONShelf);
const JSONformattedString = '{"id": 12345, "name": "John Doe"}';
console.log('JSONformattedString: ', JSONformattedString);
console.log('Type of JSONformattedString: ' + typeof JSONformattedString);
const reconstructedStudent = JSON.parse(JSONformattedString);
console.log('reconstructedStudent: ', reconstructedStudent);
console.log('Type of reconstructedStudent: ' + typeof reconstructedStudent);
