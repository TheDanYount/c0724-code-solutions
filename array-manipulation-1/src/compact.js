'use strict';
/* exported compact */
/* Pseudo code practice:
Define a function, compact, with 1 param: an unknown array, that returns an unknown array
Create new array of type unknown
Create for loop that iterates over param array
Create a conditional for truthy values
If conditional passed, push corresponding element into new array
Return new array*/
function compact(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Boolean(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
