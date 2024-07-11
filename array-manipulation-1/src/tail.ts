/* exported tail */
function tail(array: unknown[]): unknown[] {
  const newArr: unknown[] = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
