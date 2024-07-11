/* exported truncate */
function truncate(length: number, string: string): string {
  const newStr = string.slice(0, length) + '...';
  return newStr;
}
