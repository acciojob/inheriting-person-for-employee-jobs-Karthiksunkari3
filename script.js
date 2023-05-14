// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet() method to Person prototype
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old.");
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor with the current context (this)
  this.jobTitle = jobTitle;
}

// Inheriting the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding jobGreet() method to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
};

// Creating a Person instance and invoking greet() method
var person = new Person("John Doe", 25);
person.greet();

// Creating an Employee instance and invoking greet() and jobGreet() methods
var employee = new Employee("Jane Smith", 30, "Manager");
employee.greet();
employee.jobGreet();
