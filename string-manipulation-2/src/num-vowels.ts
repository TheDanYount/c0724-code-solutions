/* exported numVowels */
function numVowels(string: string): number {
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i].toUpperCase()) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        num++;
    }
  }
  return num;
}
