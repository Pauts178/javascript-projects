// Define your Book class here:
class Book {
    constructor (title, author, copyright, 
isbn, pageNum, timesCheckedOut, discarded) {
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pageNum = pageNum;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded
    }

checkout(uses = 1) {
    this.timesCheckedOut += uses;
    }
}
// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor (title, author, copyright, 
        isbn, pageNum, timesCheckedOut, discarded) {
            super(title, author, copyright, 
                isbn, pageNum, timesCheckedOut, discarded);
        }

        dispose1(currentYear) {
            if(currentYear - this.copyright > 5) {
                this.discarded = "YES";
            }
        }
}

class Novel extends Book {
    constructor (title, author, copyright, 
        isbn, pageNum, timesCheckedOut, discarded) {
            super(title, author, copyright, 
                isbn, pageNum, timesCheckedOut, discarded);
        }

        dispose2() {
            if(this.timesCheckedOut > 100) {
                this.discarded = "YES";
            }
        }
}

// Declare the objects for exercises 2 and 3 here:
let janeAusten = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 
1111111111111, 432, 32, 'No')

let shuttleBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 
0000000000000, 1147, 1, 'No')

// Code exercises 4 & 5 here:

janeAusten.checkout(5);
shuttleBuilding.dispose1(2024);

console.log(shuttleBuilding);
console.log(janeAusten);