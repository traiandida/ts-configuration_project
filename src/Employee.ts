import Person from './Person';

class Employee extends Person {
  constructor(firstName : string, lastName : string, private jobTitle : string) {
    super(firstName, lastName);
    console.log(jobTitle);
  }
}

const employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
