'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  //If string is blank
  if (string === '') {
    return '';
  } else {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        newStr += string[i].toUpperCase();
      } else {
        if (string[i - 1] === ' ') {
          newStr += string[i].toUpperCase();
        } else {
          newStr += string[i].toLowerCase();
        }
      }
    }
    return newStr;
  }
}
