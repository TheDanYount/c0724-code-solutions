'use strict';
/* exported isVowel */
function isVowel(char) {
  const cappedChar = char.toUpperCase();
  switch (cappedChar) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return true;
    default:
      return false;
  }
}
