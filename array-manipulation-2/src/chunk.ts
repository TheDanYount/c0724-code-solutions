/* exported chunk */
/* Pseudo-code practice:
Define a function with 2 params: an array of unknowns, and size, a number, and returns an array of arrays
Create a variable metaArray, an array of unknown arrays
Create a variable currentArray, an array of unknowns
Loop through every value of the initial array
Push values from the initial array into the currentArray
Check if the currentArray is equal to size, or it's the last iteration
If so, push the currentArray into the metaArray
Assign a new empty array to currentArray
Return the meta array
*/
function chunk(array: unknown[], size: number): unknown[][] {
  const metaArray: unknown[][] = [];
  let currentArray: unknown[] = [];
  for (let i = 0; i < array.length; i++) {
    currentArray.push(array[i]);
    if (currentArray.length === size || i === array.length - 1) {
      metaArray.push(currentArray);
      currentArray = [];
    }
  }
  return metaArray;
}
