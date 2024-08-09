export function titleCase(str: string): string {
  let nextIsCapitalized = true;
  let newStr = '';
  for (const char of str) {
    nextIsCapitalized
      ? (newStr += char.toUpperCase())
      : (newStr += char.toLowerCase());
    char.match(' ') ? (nextIsCapitalized = true) : (nextIsCapitalized = false);
  }
  return newStr;
}
