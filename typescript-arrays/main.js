'use strict';
//The colors array
const colors = ['red', 'white', 'blue'];
colors.forEach((v, i) => console.log(`colors[${i}]: ${v}`));
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log('The colors array:', colors);
console.log('Type of the colors array:', typeof colors);
//The students array
const students = ['Bryan', 'Daniel', 'Sam', 'Tristan'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}.`);
console.log('The students array:', students);
console.log('Type of the students array:', typeof students);
