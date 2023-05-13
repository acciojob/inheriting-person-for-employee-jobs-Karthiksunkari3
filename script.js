// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet() method to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inheriting Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding jobGreet() method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage
const person = new Person("John", 30);
person.greet(); // Output: Hello, my name is John, I am 30 years old.

const employee = new Employee("Jane", 25, "Manager");
employee.greet(); // Output: Hello, my name is Jane, I am 25 years old.
employee.jobGreet(); // Output: Hello, my name is Jane, I am 25 years old, and my job title is Manager.
