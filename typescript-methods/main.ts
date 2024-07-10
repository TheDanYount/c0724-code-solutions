// Math methods
const heroes = ["J'ohnn Jones", 'Travis Morgan', 'Wally West', 'Constantine'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random index:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Random hero:', randomHero);

// Array methods
const library = [
  { title: 'The Lies of Locke Lamora', author: 'Scott Lynch' },
  { title: 'Words of Radiance', author: 'Brandon Sanderson' },
  { title: 'The Will of the Many', author: 'James Islington' },
];
const lastBook = library.pop();
console.log('The following book was removed:', lastBook);
const firstBook = library.shift();
console.log('As was this book:', firstBook);
const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(
  `My high-fantasy library has been replaced with something
perhaps even geekier:`,
  library
);

// String methods
const fullName = 'Daniel Yount';
const firstAndLastName = fullName.split(' ');
console.log('Behold the firstAndLastName array:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(`LERRROOOOOOOY ${sayMyName}-KINS!!!!!!!!!!!!`);
console.log('(A capitalized firstName should replace "JEN" above)');

// Object methods
const employee = {
  name: 'Homer Simpson',
  age: 47,
  position: 'Nuclear Safety Technician',
};
const employeeKeys = Object.keys(employee);
console.log("This should be an array of the employee's keys:", employeeKeys);
const employeeValues = Object.values(employee);
console.log(
  "This should be an array of the employee's values:",
  employeeValues
);
const employeePairs = Object.entries(employee);
console.log(
  `This should be an array of arrays. The inner-arrays should
contain the employee's key-value pairs:`,
  employeePairs
);
