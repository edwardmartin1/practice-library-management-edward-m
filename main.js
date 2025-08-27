class LibraryItem {
    constructor(title = "", id = "", isAvailable = false) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    checkOut() {
        if (this.isAvailable) {
            console.log(`${this.title} is being checked out.`);
            this.isAvailable = false;
        }
        else {
            console.log(`${this.title} is already checked out.`);
        }
    }

    returnItem() {
        if (!this.isAvailable) {
            console.log(`${this.title} is being returned.`);
            this.isAvailable = true;
        }   
        else {
            console.log(`${this.title} is already returned.`);
        }
    }
}

class Book extends LibraryItem {
    #author;
    #genre;
  
    constructor(title = "", id = "", isAvailable = false, author = "", genre = "") {
        super(title, id, isAvailable);

        this.#author = author;
        this.#genre = genre;
    }

    getAuthor() {
        return this.#author;
    }

    getGenre() {
        return this.#genre;
    }
}

class DVD extends LibraryItem {
    #director;
    #duration;

    constructor(title = "", id = "", isAvailable = false, director = "", duration = 0) {
        super(title, id, isAvailable)

        this.#director = director;
        this.#duration = duration;
    }

    getDirector() {
        return this.#director;
    }

    getDuration() {
        return this.#duration;
    }
}

class Magazine extends LibraryItem {
    #issueNumber;
    #publisher;

    constructor(title = "", id = "", isAvailable = false, issueNumber = 0, publisher = "") {
        super(title, id, isAvailable);

        this.#issueNumber = issueNumber;
        this.#publisher = publisher;
    }

    getIssueNumber() {
        return this.#issueNumber;
    }

    getPublisher() {
        return this.#publisher;
    }
}


let book1 = new Book("Catcher in the Rye", "BA0202", true, "J. D. Salinger", "fiction");
let dvd1 = new DVD("Star Wars", "DZ0812", true, "George Lucas", 121);
let magazine1 = new Magazine("Bella Grace", "MT1729", true, 44, "Stampington & Company");


console.log();
console.log(book1);
book1.checkOut();
console.log(book1);
book1.returnItem();
console.log(book1);

console.log();
console.log(dvd1);
dvd1.checkOut();
console.log(dvd1);
dvd1.returnItem();
console.log(dvd1);

console.log();
console.log(magazine1);
magazine1.checkOut();
console.log(magazine1);
magazine1.returnItem();
console.log(magazine1);

console.log();
console.log("Title: ", book1.title);
console.log("ID: ", book1.id);
console.log("Is Available: ", book1.isAvailable);
console.log("Author: ", book1.getAuthor());
console.log("Genre: ", book1.getGenre());

console.log();
console.log("Title: ", dvd1.title);
console.log("ID: ", dvd1.id);
console.log("Is Available: ", dvd1.isAvailable);
console.log("Director: ", dvd1.getDirector());
console.log("Duration: ", dvd1.getDuration());

console.log();
console.log("Title: ", magazine1.title);
console.log("ID: ", magazine1.id);
console.log("Is Available: ", magazine1.isAvailable);
console.log("Issue Number: ", magazine1.getIssueNumber());
console.log("Publisher: ", magazine1.getPublisher());

