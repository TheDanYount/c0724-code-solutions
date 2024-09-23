import * as functions from './numbers';

describe('evenNumbers', () => {
  it('returns even numbers and only even numbers', () => {
    const numbers = [2, 2.5, 4, 6, 7];
    const result = functions.evenNumbers(numbers);
    expect(result).toEqual([2, 4, 6]);
  });
  it('returns an empty array when given one', () => {
    const numbers: number[] = [];
    const result = functions.evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns number in dollar/cent format', () => {
    const amount = 200.5;
    const result = functions.toDollars(amount);
    expect(result).toBe('$200.50');
  });
  it('rounds excess decimals', () => {
    const amount = 1.1999;
    const result = functions.toDollars(amount);
    expect(result).toBe('$1.20');
  });
  it('rounds down as well as up', () => {
    const amount = 1.2049;
    const result = functions.toDollars(amount);
    expect(result).toBe('$1.20');
  });
});

describe('divideBy', () => {
  it('returns an array of numbers divided by the divisor', () => {
    const inputArray = [-1, 0, 2.05, 3];
    const inputDivisor = 2;
    const result = functions.divideBy(inputArray, inputDivisor);
    expect(result).toEqual([-0.5, 0, 1.025, 1.5]);
  });
  it('returns an empty array when given one', () => {
    const inputArray: number[] = [];
    const inputDivisor = 2;
    const result = functions.divideBy(inputArray, inputDivisor);
    expect(result).toEqual([]);
  });
  it('does not modify the original input array', () => {
    const inputArray = [1, 2, 3];
    const inputDivisor = 2;
    const inpuArrayCopy = [...inputArray];
    functions.divideBy(inputArray, inputDivisor);
    expect(inputArray).toEqual(inpuArrayCopy);
  });
});

describe('multiplyBy', () => {
  it('returns object with modified number values, and only modified number values', () => {
    const obj = {
      firstName: 'Bob',
      fakeNum: '5',
      zeroEquivalent: null,
      num: 10,
      secondNum: 20,
    };
    const multiplier = 2;
    const result = functions.multiplyBy(obj, multiplier);
    expect(result).toEqual({
      firstName: 'Bob',
      fakeNum: '5',
      zeroEquivalent: null,
      num: 20,
      secondNum: 40,
    });
  });
  it('returns an empty object when given one', () => {
    const obj = {};
    const multiplier = 2;
    const result = functions.multiplyBy(obj, multiplier);
    expect(result).toEqual({});
  });
});
