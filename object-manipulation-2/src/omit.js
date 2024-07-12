'use strict';
/* exported omit */
function omit(source, keys) {
  const newObj = {};
  for (const key in source) {
    if (!checkForMatch(keys, key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
function checkForMatch(keys, key) {
  for (const val of keys) {
    if (val === key) {
      return true;
    }
  }
  return false;
}
