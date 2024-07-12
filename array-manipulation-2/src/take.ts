/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];
  for (let i = 0; i < count; i++) {
    if (array.length <= i) {
      break;
    }
    newArr.push(array[i]);
  }
  return newArr;
}
