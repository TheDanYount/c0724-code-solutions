'use strict';
/* exported includes */
/*Pseudo-code practice:
Define a function, includes, with 2 params: an array of unknowns, and a value of unknown, that returns a boolean
Loop through the values of the array
If a match to value is found, return true
After the loop, return false
*/
function includes(array, value) {
  for (const val of array) {
    if (val === value) {
      return true;
    }
  }
  return false;
}
