const width: number = 10;
const height: number = 5;
const area: number = width * height;

console.log(`Value of area: ${area}.`);
console.log(`Type of area: ${typeof area}.`);

const bill: number = 8;
const payment: number = 24;
const change: number = payment - bill;

console.log(`Value of change: ${change}.`);
console.log(`Type of change: ${typeof change}.`);

const quizzes: number = 80;
const midterm: number = 70;
const final: number = 90;
const grade: number = (quizzes + midterm + final) / 3;

console.log(`Value of grade: ${grade}.`);
console.log(`Type of grade: ${typeof grade}.`);

const firstName: string = 'Daniel';
const lastName: string = 'Yount';
const fullName: string = firstName + ' ' + lastName;

console.log(`Value of fullName: ${fullName}.`);
console.log(`Type of fullName: ${typeof fullName}.`);

const pH: number = 8.5;
const isAcidic: boolean = pH < 7;

console.log(`Value of isAcidic: ${isAcidic}.`);
console.log(`Type of isAcidic: ${typeof isAcidic}.`);

const headCount: number = 4;
const isSparta: boolean = headCount === 300;

console.log(`Value of isSparta: ${isSparta}.`);
console.log(`Type of isSparta: ${typeof isSparta}.`);

let motto: string = fullName;
motto += ' is the GOAT';

console.log(`Value of motto: ${motto}.`);
console.log(`Type of motto: ${typeof motto}.`);
