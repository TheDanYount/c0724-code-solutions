'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArr = values.filter((v) => v !== null);
  return newArr;
}
