/* exported getIndexes */
function getIndexes(array: unknown[]): number[] {
  const newArr: number[] = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(i);
  }
  return newArr;
}
