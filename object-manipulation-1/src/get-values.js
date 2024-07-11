'use strict';
/* exported getValues */
/*Pseudo-code practice:
Define a function, getValues, that accepts an object as a parameter and returns an array of unknowns
Create an empty array of unknowns
Create a for in loop to loop over the parameter
Within the loop, push each value from the object into the new array
return the new array
*/
function getValues(object) {
  const newArr = [];
  for (const key in object) {
    newArr.push(object[key]);
  }
  return newArr;
}
