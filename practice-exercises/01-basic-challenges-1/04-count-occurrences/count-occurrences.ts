export function countOccurrences(str: string, char: string): number {
  const regex = new RegExp(char, 'g');
  const matches = str.match(regex);
  let num = 0;
  matches ? (num = matches.length) : (num = 0);
  return num;
}
