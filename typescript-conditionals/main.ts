/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(num: number): boolean {
  return num < 5;
}

function isEven(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(str: string): boolean {
  const firstChar = str[0];
  switch (firstChar) {
    case 'J':
      return true;
    default:
      return false;
  }
}

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  return person.age >= 21;
}

function isOldEnoughToDrive(person: Person): boolean {
  // The below line is to satisfy our compiler's desire that every parameter has a use
  person.name += ' the Great';
  return false;
}

function categorizeAcidity(pH: number): string {
  if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Jurassic Park';
    case 'comedy':
      return 'Elf';
    case 'horror':
      return 'IT';
    case 'drama':
      return 'Secondhand Lions';
    case 'musical':
      return 'Fiddler on the Roof';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'The Avengers';
  }
}

/* Tests:

const person22: Person = {
  name: 'Fakename McFakerson',
  age: 22,
};

const person15: Person = {
  name: 'Falsename McFalserson',
  age: 15,
};

console.log(`isUnderFive test w/ 4: ${isUnderFive(4)}`);
console.log(`isUnderFive test w/ 6: ${isUnderFive(6)}`);
console.log(`isEven test w/ 3: ${isEven(3)}`);
console.log(`isEven test w/ 4: ${isEven(4)}`);
console.log(`startsWithJ test w/ "Dan": ${startsWithJ('Dan')}`);
console.log(`startsWithJ test w/ "John": ${startsWithJ('John')}`);
console.log(
  `isOldEnoughToDrink test w/ 22 yo: ${isOldEnoughToDrink(person22)}`
);
console.log(
  `isOldEnoughToDrink test w/ 15 yo: ${isOldEnoughToDrink(person15)}`
);
console.log(
  `isOldEnoughToDrive test w/ 22 yo: ${isOldEnoughToDrive(person22)}`
);
console.log(
  `isOldEnoughToDrive test w/ 15 yo: ${isOldEnoughToDrive(person15)}`
);
console.log(`Note that isOldEnoughToDrive is always supposed to return false`);
console.log(`categorizeAcidity with 1: ${categorizeAcidity(1)}`);
console.log(`categorizeAcidity with 7: ${categorizeAcidity(7)}`);
console.log(`categorizeAcidity with 10: ${categorizeAcidity(10)}`);
console.log(`categorizeAcidity with 20: ${categorizeAcidity(20)}`);
console.log(`introduceWarnerBro with "yakko": ${introduceWarnerBro('yakko')}`);
console.log(
  `introduceWarnerBro with "john doe": ${introduceWarnerBro('john doe')}`
);
console.log(`recommendMovie with "action": ${recommendMovie('action')}`);
console.log(`recommendMovie with "horror": ${recommendMovie('horror')}`);
console.log(
  `recommendMovie with "misspelling": ${recommendMovie('misspelling')}`
);
console.log(`Note that the above tests my default value, which I added
because typescript picked up on the possibility that no case may
be selected without it, and thus the function wouldn't fulfill its
promise (not the formal term promise) to return a string`);
*/
