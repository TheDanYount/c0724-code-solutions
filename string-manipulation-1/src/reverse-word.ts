/* exported reverseWord */
function reverseWord(word: string): string {
  let newStr: string = '';
  for (let i = 0; i < word.length; i++) {
    newStr += word[word.length - 1 - i];
  }
  return newStr;
}
