/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  let lastChar = '';
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newStr += string[i].toUpperCase();
    } else if (lastChar === ' ') {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i].toLowerCase();
    }
    lastChar = string[i];
  }
  return newStr;
}
