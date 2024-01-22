const input = require('readline-sync');
let str = "LaunchCode";

let relocatedNum = input.question('How many letters do you want to relocate? ')

if (relocatedNum > str.length || relocatedNum < 1) {
   console.log(`That is an invalid answer. ${str} is only ${str.length} letters long. 3 letters will be relocated`)
    relocatedNum = 3

}
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strEdit = str.slice(relocatedNum) + str.slice(0, relocatedNum)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`My original string is ${str}, my modified string is ${strEdit}`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//see above line 4
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
