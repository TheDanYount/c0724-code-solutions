/* exported toObject */
/* Pseudo-code practice:
Define a function, toObject, that takes an array of a string, unknown pair and returns an object
Create an empty object with strings and keys and unknowns as values
Add the property with the key/value from the array to the object
Return the object
*/
function toObject(array: [string, unknown]): object {
  const newObj: Record<string, unknown> = {};
  newObj[array[0]] = array[1];
  return newObj;
}
