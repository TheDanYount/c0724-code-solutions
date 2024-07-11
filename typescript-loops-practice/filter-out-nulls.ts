/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const newArr: unknown[] = values.filter((v) => v !== null);
  return newArr;
}
