'use strict';
/* exported swapChars */
/*Pseudo-code practice:
Define a function, swapChars, with 3 parameters: number, number, string, that returns a string
Declare and initialize a new string
Create a for loop to iterate a number of times equal to the string argument's length
Create an if statement to check if the iteration is equal to the first argument
If so: add the string at the second stored number's value to the new string
Create an else if statement to check if the iteration is equal to the second argument
If so: add the string at the first stored number's value to the new string
Create an else statement to add the string at the iteration to the new string
Return the new string
*/
function swapChars(firstIndex, secondIndex, string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newStr += string[secondIndex];
    } else if (i === secondIndex) {
      newStr += string[firstIndex];
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
