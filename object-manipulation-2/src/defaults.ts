/* exported defaults */
/* Pseudo-code practice:
Define a function with 2 params: target, an object, and source, an object, and no return
Loop through the properties of source
If such a property is not found on target
Add the  property
*/
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void {
  for (const key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
