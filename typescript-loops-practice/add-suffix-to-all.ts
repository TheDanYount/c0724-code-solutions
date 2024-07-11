/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i] + suffix);
  }
  return newArr;
}
