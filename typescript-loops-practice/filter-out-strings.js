'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArr = values.filter((v) => typeof v !== 'string');
  return newArr;
}
