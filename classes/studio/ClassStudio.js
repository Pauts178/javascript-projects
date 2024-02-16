//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    average() {
        let total = 0
        // let total = this.scores.reduce((a,b));
        for (let i = 0; i < this.scores.length; i++){
          total += this.scores[i];
        }
        let avg = total / this.scores.length;
        avg = Math.round(avg * 10) / 10;
        return avg
        }
       status(average) {
        if (average >= 90) {
            return 'accepted';
        } else if (average >= 80) {
            return 'reserved';
        } else if (average >= 70) {
            return 'probationary';
        } else {
            return 'rejection';
        }
       }
    }


let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let dog = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let alligator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

// console.log(bear);
// console.log(dog);
// console.log(alligator);
// bear.addScore(83)

// console.log(bear)
// console.log(bear.average())

console.log(alligator.status(alligator.average()));
console.log(bear.status(bear.average()));
console.log(dog.status(dog.average()))


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
alligator.addScore(100);
alligator.addScore(100);
alligator.addScore(100);
alligator.addScore(100);
alligator.addScore(100);
alligator.addScore(100);

console.log(alligator.status(alligator.average()));

console.log(`${alligator.name} earned an average test score of ${alligator.average()}% and has a status of ${alligator.status(alligator.average())}.`)

