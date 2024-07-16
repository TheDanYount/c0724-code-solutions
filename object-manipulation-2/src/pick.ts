/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  for (const value of keys) {
    if (source[value] !== undefined) {
      newObj[value] = source[value];
    }
  }
  return newObj;
}
