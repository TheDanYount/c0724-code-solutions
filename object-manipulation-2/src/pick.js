'use strict';
/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (const value of keys) {
    if (source[value] !== undefined) {
      newObj[value] = source[value];
    }
  }
  return newObj;
}
