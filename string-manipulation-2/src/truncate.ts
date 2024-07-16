/* exported truncate */
function truncate(length: number, string: string): string {
  let newStr = '';
  for (let i = 0; i < length; i++) {
    if (string[i] !== undefined) {
      newStr += string[i];
    }
  }
  return newStr + '...';
}
