/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  if (array.length >= count) {
    return array.slice(array.length - count);
  } else {
    return array;
  }
}
