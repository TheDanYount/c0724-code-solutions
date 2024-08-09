export function findMissingLetter(arr: string[]): string | undefined {
  const str = arr.join('');
  let last = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    if (!(String.fromCharCode(last + 1) !== str[i]))
      return String.fromCharCode(last + 1);
    last = str.charCodeAt(i);
  }
  return undefined;
}
