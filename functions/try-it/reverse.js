function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}
console.log(reverse('hello'));

let reversedLetters = function(str) {
   str.split('').reverse().join('');
   return reversedLetters;
};
console.log(reversedLetters('hello'));