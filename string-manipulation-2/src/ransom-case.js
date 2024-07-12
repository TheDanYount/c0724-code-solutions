'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let ransomStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomStr += string[i].toLowerCase();
    } else {
      ransomStr += string[i].toUpperCase();
    }
  }
  return ransomStr;
}
