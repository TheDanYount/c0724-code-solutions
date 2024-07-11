/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const newArr: unknown[] = values.filter((v) => typeof v !== 'string');
  return newArr;
}
