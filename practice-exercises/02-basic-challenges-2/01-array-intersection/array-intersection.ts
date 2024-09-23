export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const includedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    arr2.includes(arr1[i]) && includedArray.push(arr1[i]);
  }
  return includedArray;
}
