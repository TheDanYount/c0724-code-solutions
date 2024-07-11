/* exported getWords */
/* Pseudo-code practice:
Define a function, getWords, with one parameter, string of type string, and returns an array of strings
Check if the parameter is not empty. If so:
Assign the split method of the parameter, with the argument " ", to an array of strings
Return the array
If not return a blank array
*/
function getWords(string: string): string[] {
  if (string !== '') {
    const wordArray = string.split(' ');
    return wordArray;
  } else {
    return [];
  }
}
