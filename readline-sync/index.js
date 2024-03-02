const input = require('readline-sync');

let name = input.question("Enter your first name");
console.log("First name:" + name);

let lastName = input.question("Enter your last name");
console.log("Last name:" + lastName);

console.log("Last, First:" + lastName + "," + name);

console.log("Hello" +"," + " " +name + " " + lastName);
