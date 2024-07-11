/* exported sumAll */
function sumAll(numbers: number[]): number {
  let runningTotal = 0;
  for (const v of numbers) {
    runningTotal += v;
  }
  return runningTotal;
}
