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
const JSONShelf = JSON.stringify(shelf);
console.log('JSONShelf', JSONShelf);
console.log('Type of JSONShelf', typeof JSONShelf);
const reconstructedShelf = JSON.parse(JSONShelf);
console.log('reconstructedShelf: ', reconstructedShelf);
console.log('Type of reconstructedShelf: ' + typeof reconstructedShelf);
