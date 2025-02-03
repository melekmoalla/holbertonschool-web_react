interface Teacher{
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOExperience?: number;
  location: string;
  [propName: string]: any;

}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"


console.log(teacher3);

////////////////////////////////////////////////
interface printTeacherFunction{
  (firstName: string, lastName: string): string;

}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe')); 


interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName());    // Output: "John"