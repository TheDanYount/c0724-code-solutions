'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let newStr = '';
  for (let i = 0; i < length; i++) {
    if (string[i] !== undefined) {
      newStr += string[i];
    }
  }
  return newStr;
}
