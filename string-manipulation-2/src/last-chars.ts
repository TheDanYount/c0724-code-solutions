/* exported lastChars */
/* Pseudo-code practice:
Define a function, lastChars, that accepts 2 params: a number and a string, and returns a string
Check to make sure that length <= string.length.
If so: return the return of the slice method called on the string object with the argument string.length - length
Else: return the string
*/
function lastChars(length: number, string: string): string {
  if (length <= string.length) {
    return string.slice(string.length - length);
  } else {
    return string;
  }
}
