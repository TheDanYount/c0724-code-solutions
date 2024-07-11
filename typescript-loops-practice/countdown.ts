/* exported countdown */
function countdown(num: number): number[] {
  const arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
