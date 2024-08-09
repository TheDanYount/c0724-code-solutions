export function findMaxNumber(arr: number[]): number {
  const sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[0];
}
