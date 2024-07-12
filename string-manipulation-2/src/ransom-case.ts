/* exported ransomCase */
function ransomCase(string: string): string {
  let ransomStr: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomStr += string[i].toLowerCase();
    } else {
      ransomStr += string[i].toUpperCase();
    }
  }
  return ransomStr;
}
