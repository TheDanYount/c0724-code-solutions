/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log("The getNumbersToTen function's return:", getNumbersToTen());
console.log(
  "A local scope check (a redo of the getNumbersToTen function's return):",
  getNumbersToTen()
);

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log(
  "The getEvenNumbersToTwenty function's return:",
  getEvenNumbersToTwenty()
);
console.log('A local scope check:', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log("The repeatWord function's return:", repeatWord('Hello', 5));
console.log('A local scope check:', repeatWord('Hello', 5));

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

console.log('The logEachCharacter function test (for "Hello!"):');
logEachCharacter('Hello!');

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log(
  'doubleAll tests for 1-3, 3-1, and 5:',
  doubleAll([1, 2, 3]),
  doubleAll([3, 2, 1]),
  doubleAll([5])
);

type Obj = Record<string, unknown>;

const person: Obj = {
  firstName: 'Daniel',
  lastName: 'Yount',
};
const pizzaOrder: Obj = {
  size: 'medium',
  toppings: ['pepperoni', 'ham'],
  price: 17.99,
};

function getKeys(obj: Obj): string[] {
  const keys: string[] = [];
  for (const prop in obj) {
    keys.push(prop);
  }
  return keys;
}

console.log('getKeys test w/ a person:', getKeys(person));
console.log('getKeys test w/ a pizzaOrder:', getKeys(pizzaOrder));

function getValues(obj: Obj): unknown[] {
  const values: unknown[] = [];
  for (const prop in obj) {
    values.push(obj[prop]);
  }
  return values;
}

console.log('getValues test w/ a person:', getValues(person));
console.log('getValues test w/ a pizzaOrder:', getValues(pizzaOrder));
