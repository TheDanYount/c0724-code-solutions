'use strict';
/* exported countdown */
function countdown(num) {
  const arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
