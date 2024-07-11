/* exported numVowels */
function numVowels(string: string): number {
  let runningTotal: number = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      runningTotal++;
    }
  }
  return runningTotal;
}

function isVowel(char: string): boolean {
  switch (char.toUpperCase()) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return true;
    default:
      return false;
  }
}
