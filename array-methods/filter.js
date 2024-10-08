'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
console.log(
  'Evens:',
  numbers.filter((v) => v % 2 === 0)
);
console.log(
  "Names without 'd' or 'D':",
  names.filter((v) => !(v.includes('d') || v.includes('D')))
);
