'use strict';
/* exported take */
function take(array, count) {
  const newArr = [];
  for (let i = 0; i < count; i++) {
    if (array.length <= i) {
      break;
    }
    newArr.push(array[i]);
  }
  return newArr;
}
