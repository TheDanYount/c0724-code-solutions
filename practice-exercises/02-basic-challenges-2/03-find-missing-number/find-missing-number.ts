export function findMissingNumber(arr: number[]): number | undefined {
  if (arr.length === 0) return 1;
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (i + 1 !== sortedArr[i]) return i + 1;
  }
  return undefined;
}
