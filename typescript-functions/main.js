'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const secs = convertMinutesToSeconds(3);
console.log(`I ran convertMinutesToSeconds with 3 and got: ${secs}.`);
function greet(name) {
  return `Hey ${name}!`;
}
const greetSensei = greet('Brandon');
console.log(`I ran greet with "Brandon" and got: ${greetSensei}`);
const getArea = (width, height) => {
  return width * height;
};
const fourByFour = getArea(4, 4);
console.log(`I ran getArea with 4 and 4 and got: ${fourByFour}.`);
const sensei = {
  firstName: 'Brandon',
  lastName: 'Moy',
};
const getFirstName = (person) => {
  return person.firstName;
};
const senseiFirstName = getFirstName(sensei);
console.log(`I ran getFirstName with our teacher and got: ${senseiFirstName}.`);
const getLastElement = (array) => {
  return array[array.length - 1];
};
const thisShouldBe3 = getLastElement([1, 2, 3]);
console.log(`I ran getLastElement with [1, 2, 3] and got: ${thisShouldBe3}.`);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const thisShouldBeThreeHundred = callOtherFunction(convertMinutesToSeconds, 5);
console.log(
  `I ran callOtherFunctions with convertMinutesToSeconds and 5 and got ${thisShouldBeThreeHundred}.`
);
