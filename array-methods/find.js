'use strict';
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];
const products = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];
console.log(
  'User w/ id of 2:',
  users.find((v) => v.id === 2)
);
const expensiveProduct = products.find((v) => v.price > 900);
console.log('An expensive product:', expensiveProduct);
