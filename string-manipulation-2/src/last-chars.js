'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let newStr = '';
  if (string.length < length) {
    return string;
  }
  for (let i = string.length - length; i < string.length; i++) {
    if (string[i] !== undefined) {
      newStr += string[i];
    }
  }
  return newStr;
}
