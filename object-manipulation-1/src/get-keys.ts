/* exported getKeys */
function getKeys(object: Record<string, unknown>): string[] {
  const newArr: string[] = [];
  for (const key in object) {
    newArr.push(key);
  }
  return newArr;
}
