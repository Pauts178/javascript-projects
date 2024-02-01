let steps = 0

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function(steps) {
      return Math.floor(Math.random(steps)*11)
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chipanzee",
   mass: 11,
   age: 6,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

let beagleBoy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};

let tardy = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function() {
      return Math.floor(Math.random()*11)
   }
};
console.log(superChimpOne);

// After you have created the other object literals, add the astronautID property to each one.
superChimpOne['astronautID'] = 3;
superChimpTwo['astronautID'] = 4;
salamander['astronautID'] = 6;
beagleBoy['astronautID'] = 7;
tardy['astronautID'] = 9;

superChimpOne['move'] = function(steps) {return (Math.floor(Math.random(steps)*11))};

// Create an array to hold the animal objects.
crew = [superChimpOne, superChimpTwo, salamander, beagleBoy, tardy]
// Print out the relevant information about each animal.

// Start an animal race!

function crewReports(crew) {
  return (`${crew.name} is a ${crew.species}. They are ${crew.age} years old and ${crew.mass} kilograms. Their ID is ${crew.astronautID}.`)
}
console.log(crewReports(crew[2]))

function fitnessTest (candidates) {}