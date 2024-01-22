const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
arrayFood = food.split(",").sort();
arrayEquipment = equipment.split(",").sort();
arrayPets = pets.split(",").sort();
arraySleepAids = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(arrayFood, arrayEquipment, arrayPets, arraySleepAids)
console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let cabinetNum = input.question("Please choose a cabinet: ")

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetNum < 0 || cabinetNum > 3) {
    console.log('Invalid Choice')
} else {
    console.log(`The contents of cabinet ${cabinetNum}:
    ${cargoHold[cabinetNum].join(', ')}`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let selectedItem = input.question("Which item would you like? ");
let conditionalItem;

if (cargoHold[cabinetNum].includes(selectedItem)) {
    conditionalItem = "DOES"
} else {
    conditionalItem = "DOES NOT"
}
console.log(`The cabinet ${conditionalItem} contain ${selectedItem}!`)