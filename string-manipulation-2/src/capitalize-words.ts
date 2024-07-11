/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  // If string is blank
  if (string === '') {
    return '';
  } else {
    let newStr: string = '';
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        newStr += string[i].toUpperCase();
      } else {
        if (string[i - 1] === ' ') {
          newStr += string[i].toUpperCase();
        } else {
          newStr += string[i].toLowerCase();
        }
      }
    }
    return newStr;
  }
}
