'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let runningTotal = 0;
  for (const v of numbers) {
    runningTotal += v;
  }
  return runningTotal;
}
