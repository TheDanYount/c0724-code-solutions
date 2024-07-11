'use strict';
/* exported reverse */
/* Pseudo code practice:
Define a function, reverse, with 1 param: an unknown array, that returns an unknown array
Create new array of type unknown
Create for loop that iterates over param array
Within each loop unshift items from the param array to the new array
After the loop return the new array*/
function reverse(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
}
