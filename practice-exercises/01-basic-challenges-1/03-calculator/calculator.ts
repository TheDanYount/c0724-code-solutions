export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  let solution = 0;
  switch (operator) {
    case '+':
      solution = num1 + num2;
      break;
    case '-':
      solution = num1 - num2;
      break;
    case '*':
      solution = num1 * num2;
      break;
    case '/':
      solution = num1 / num2;
      break;
    case '**':
      solution = num1 ** num2;
      break;
    case '%':
      solution = num1 % num2;
  }
  return solution;
}
