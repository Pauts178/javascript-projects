const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isValidEntry1 = function(entry) {
  if (entry[0] !== "a") {
    return false;
  }
  return true;
  };

// TODO 2: write a validator 
// that ensures input is a vowel
let isValidEntry2 = function(entry) {
  if (entry[0] == "a" || entry[0] == "e" || entry[0] == "i" || entry[0] == "o" || entry[0] == "u" ) {
    return true;
  }
  return false;
  };
// Be sure to test your code!

console.log(getValidInput('Enter a word: ', isValidEntry2))