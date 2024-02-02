// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let idNumbers = [291, 414, 503, 599, 796, 890];
// Code your selectRandomEntry function here:

function selectRandomEntry(numbersArray) {
  let index = Math.floor(Math.random() * numbersArray.length);
  return numbersArray[index];
}
// Code your buildCrewArray function here:
let crewIds = []
let selectedCrew = []

while (crewIds.length < 3) {
  let randomId = selectRandomEntry(idNumbers);
    if(!crewIds.includes(randomId)) {
      crewIds.push(randomId);
    }
}
function buildCrewArray(idNumbers, animals) {
  for (let i = 0; i < animals.length; i++) {
  if (crewIds.includes(animals[i].astronautID)) {
    selectedCrew.push(animals[i])
  }
}
  return selectedCrew
}







// Code your template literal and console.log statements:

buildCrewArray(idNumbers, animals)
console.log(selectedCrew)
console.log(`${selectedCrew[0].name}, ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`)