function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
const secs: number = convertMinutesToSeconds(3);
console.log(`I ran convertMinutesToSeconds with 3 and got: ${secs}.`);

function greet(name: string): string {
  return `Hey ${name}!`;
}
const greetSensei: string = greet('Brandon');
console.log(`I ran greet with "Brandon" and got: ${greetSensei}`);

const getArea = (width: number, height: number): number => {
  return width * height;
};

const fourByFour: number = getArea(4, 4);
console.log(`I ran getArea with 4 and 4 and got: ${fourByFour}.`);

interface Person {
  firstName: string;
  lastName: string;
}

const sensei: Person = {
  firstName: 'Brandon',
  lastName: 'Moy',
};

const getFirstName = (person: Person): string => {
  return person.firstName;
};
const senseiFirstName: string = getFirstName(sensei);
console.log(`I ran getFirstName with our teacher and got: ${senseiFirstName}.`);

const getLastElement = (array: unknown[]): unknown => {
  return array[array.length - 1];
};
const thisShouldBe3: unknown = getLastElement([1, 2, 3]);
console.log(`I ran getLastElement with [1, 2, 3] and got: ${thisShouldBe3}.`);

function callOtherFunction(otherFunction: Function, params: unknown): unknown {
  return otherFunction(params);
}
const thisShouldBeThreeHundred: unknown = callOtherFunction(
  convertMinutesToSeconds,
  5
);
console.log(
  `I ran callOtherFunctions with convertMinutesToSeconds and 5 and got ${thisShouldBeThreeHundred}.`
);
