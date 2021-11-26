export class Book {
    constructor(name, genre, price, author, reviews) {
        this.name = name;
        this.genre = genre;
        this.price = price;
        this.author = author;
        if (reviews) {
            this.reviews = reviews;
        }
        else {
            this.reviews = [];
        }
        if (this.reviews.length > 0) {
            const reviewSum = this.reviews.reduce((accumulator, currentValue) => {
                return accumulator + currentValue[1];
            }, 0);
            this.rating = reviewSum / this.reviews.length;
        }
        else {
            this.rating = null;
        }
    }
    getProductDescription() {
        return `Book "${this.name}" by ${this.author.firstName}${this.author.lastName}`;
    }
}
