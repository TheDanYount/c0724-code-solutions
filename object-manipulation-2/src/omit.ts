/* exported omit */
function omit(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  for (const key in source) {
    if (!checkForMatch(keys, key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}

function checkForMatch(keys: string[], key: string): boolean {
  for (const val of keys) {
    if (val === key) {
      return true;
    }
  }
  return false;
}
