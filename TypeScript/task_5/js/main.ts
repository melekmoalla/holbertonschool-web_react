


interface Teacher{
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOExperience?: number;
  location: string;
  [propName: string]: any;

}


// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"


//console.log(teacher3);

////////////////////////////////////////////////
interface printTeacherFunction{
  (firstName: string, lastName: string): string;

}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe')); 
////////////////////////////////////////////////

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
////////////////////////////////////////////////

interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface{

  workFromHome =()=> 'Working from home';
  getCoffeeBreak =()=> 'Getting a coffee break';
  workDirectorTasks =()=> 'Getting to director tasks';
}

class Teacher implements TeacherInterface{
  workFromHome =()=> 'Cannot work from home';
  getCoffeeBreak =()=> 'Cannot have a break';
  workTeacherTasks =()=> 'Getting to work';
}

const createEmployee = (salary: number | string): Teacher | Director => {
  const numericSalary = typeof salary === "string" ? parseFloat(salary) : salary;
  return numericSalary < 500 ? new Teacher() : new Director();
}

console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director

////////////////////////////////////////////////

const isDirector = (employee: Teacher | Director): employee is Director => {
  return employee instanceof Director;
};

const executeWork = (employee: Teacher | Director): void => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
};


executeWork(createEmployee(200)); // "Getting to work"
executeWork(createEmployee(1000));
////////////////////////////////////////////////

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) : string=>{
  return todayClass === 'Math' ?  'Teaching Math': 'Teaching History'
}


console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

////////////////////////////////////////////////

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};
 
const newRowID : RowID = CRUD.insertRow(row);
console.log(`Inserted Row ID: ${newRowID}`);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);


////////////////////////////////////////////////


interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number ;
  brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits"
  };
}

const major1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 2, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 1, brand: "MinorCredits" };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log("Total Major Credits:", totalMajor);
console.log("Total Minor Credits:", totalMinor);