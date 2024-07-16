/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];
  for (let i = 0; i < array.length - count; i++) {
    newArr[i] = array[i];
  }
  return newArr;
}
