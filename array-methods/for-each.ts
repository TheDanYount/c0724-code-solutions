const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
let message = '';
values.forEach((v) => (message += v + ', '));
console.log('values:', message);
let message2 = '';
values.forEach(
  (v, i, arr) => (message2 += arr[arr.length - 1 - i] + ', ') /* v */
);
console.log('values reversed:', message2);
