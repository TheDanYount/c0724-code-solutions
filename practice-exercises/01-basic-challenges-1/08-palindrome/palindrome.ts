export function isPalindrome(str: string): boolean {
  const alphanumericStr = str.replace(/[^a-z0-9]/g, '');
  let reversedAS = '';
  for (let i = alphanumericStr.length - 1; i >= 0; i--) {
    reversedAS += alphanumericStr[i];
  }
  return alphanumericStr === reversedAS;
}
