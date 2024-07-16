'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
