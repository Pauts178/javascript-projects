//Create an anonymous function and set it equal to a variable.
const anonymous = function(a) {
    if (typeof a === "number"){
 a = a*3;
     } else if (typeof a === "string") {
        a = "ARRR!"
     } 
return a
}
console.log(anonymous(45))
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let newArr = []
for (let i = 0; i < arr.length; i++)
newArr.push(anonymous(arr[i]))
console.log(newArr)