interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Daniel',
  lastName: 'Yount',
  age: 27,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('Full name is', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Barista';
console.log('I live in Irvine?', student.livesInIrvine);
console.log('My previous occupation:', student.previousOccupation);

console.log('The student object:', student);
console.log('The typeof student:', typeof student);

const vehicle: Vehicle = {
  make: 'Ford',
  model: 'Expedition',
  year: 2016,
};

vehicle['color'] = 'Vermilion';
vehicle['isConvertible'] = false;
console.log('The color of the vehicle is:', vehicle['color']);
console.log('The vehicle is a convertible?', vehicle['isConvertible']);

console.log('The vehicle object:', vehicle);
console.log('The type of vehicle:', typeof vehicle);

const pet: Pet = {
  name: 'Sammy',
  kind: 'Dog',
};

delete pet.name;
delete pet.kind;

console.log('The value of pet, post-deletion:', pet);
console.log('The type of pet: ', typeof pet);
