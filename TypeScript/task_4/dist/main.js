"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const printTeacher = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};
console.log(printTeacher('John', 'Doe'));
class StudentClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName()); // Output: "John"
class Director {
    constructor() {
        this.workFromHome = () => 'Working from home';
        this.getCoffeeBreak = () => 'Getting a coffee break';
        this.workDirectorTasks = () => 'Getting to director tasks';
    }
}
class Teacher {
    constructor() {
        this.workFromHome = () => 'Cannot work from home';
        this.getCoffeeBreak = () => 'Cannot have a break';
        this.workTeacherTasks = () => 'Getting to work';
    }
}
const createEmployee = (salary) => {
    const numericSalary = typeof salary === "string" ? parseFloat(salary) : salary;
    return numericSalary < 500 ? new Teacher() : new Director();
};
console.log(createEmployee(200));
Teacher;
console.log(createEmployee(1000));
Director;
console.log(createEmployee('$500'));
Director;
////////////////////////////////////////////////
const isDirector = (employee) => {
    return employee instanceof Director;
};
const executeWork = (employee) => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
};
executeWork(createEmployee(200)); // "Getting to work"
executeWork(createEmployee(1000));
const teachClass = (todayClass) => {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
};
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
const CRUD = __importStar(require("./crud"));
const row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
const newRowID = CRUD.insertRow(row);
console.log(`Inserted Row ID: ${newRowID}`);
const updatedRow = Object.assign(Object.assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
