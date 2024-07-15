'use strict';
/* exported invert */
/*Pseudo-code practice:
Define a function, invert, with a parameter, source, of type Record<string, unknown>,
with return of type Record<string, string>
Declare and initialize new object of type Record<string, string>
Loop through the keys of source
Add a new property of newObj of the string-ed value of source,
with value of the key of source
Return newObj

*/
function invert(source) {
  const newObj = {};
  for (const key in source) {
    newObj[String(source[key])] = key;
  }
  return newObj;
}
