'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr += string[i].toLowerCase();
    } else {
      newStr += string[i].toUpperCase();
    }
  }
  return newStr;
}
