'use strict';
/* exported truncate */
function truncate(length, string) {
  const newStr = string.slice(0, length) + '...';
  return newStr;
}
