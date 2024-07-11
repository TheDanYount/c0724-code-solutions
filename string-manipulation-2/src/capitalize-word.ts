/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  if (!(word.toUpperCase() === 'JAVASCRIPT')) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  } else {
    return 'JavaScript';
  }
}
