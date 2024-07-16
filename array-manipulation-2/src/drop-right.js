'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArr = [];
  for (let i = 0; i < array.length - count; i++) {
    newArr[i] = array[i];
  }
  return newArr;
}
