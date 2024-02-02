const input = require('readline-sync');

let name = input.question("Enter your first name: ");
let otherName = input.question ("Enter your last name: ");
console.log("First name:" , name);
console.log("Last name:" , otherName);
console.log("Last, First:" , otherName + "," , name);