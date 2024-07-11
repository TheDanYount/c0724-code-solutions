'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const strArr = [];
  for (const val of numbers) {
    if (val % 2 === 0) {
      strArr.push('even');
    } else {
      strArr.push('odd');
    }
  }
  return strArr;
}
