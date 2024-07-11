'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let newStr = '';
  for (let i = 0; i < word.length; i++) {
    newStr += word[word.length - 1 - i];
  }
  return newStr;
}
