import { Book } from './book.js';
// import { serialize } from './helpers.js'
import { showCart } from './helpers.js';
import { Genre } from './types.js';
import { getGenreName } from './helpers.js';
// function findSuitableBook (
//   genre:     string,
//   pagesLimit: number,
//   multipleRecommendations =true
// ) : Book | Book[] {
//   const findAlgorithm = (book: Book) =>{
//     return book.genre === genre && book.pageAmount <= pagesLimit
//   }
//   if (multipleRecommendations) {
//     return books.filter(findAlgorithm)
//   } else {
//     return books.find(findAlgorithm)
//   }
// }
// const recommendedBook = findSuitableBook('fantasy', 1000)
// if(recommendedBook instanceof Book){
//   console.log(recommendedBook.name)
// } else {
//   console.log(recommendedBook[0].name)
// }
// const book = new Book('Harry Potter')
// if(book.price == null){
//   console.log('book is absence in sell')
// } else {
//   console.log('book appear in sell')
// }
// console.log(book.genre.toUpperCase(), book.price.toFixed(2))
// import { books } from './book-collection.js'
// // Явная типизация
// let genre: string = 'fantasy';
// let price: number = 980;
// // Неявная типизация
// let genre = 'fantasy';
// let price = 980;
// const book = new Book('Harry Potter', genre, price)
// function CanIBuyTheBook (book:Book){
//   return book.price != null;
// }
// if(CanIBuyTheBook(book)){
//   console.log('The book is absence')
// } else {
//   console.log('You can buy the book')
// }
// let genre: string = 'fantasy'
// let price = 980
// const book = new Book('Harry Potter', genre, price)
// console.log(serialize(book))
// console.log(serialize(null))
// console.log(serialize(undefined))
// console.log(serialize(5))
// console.log(serialize(false))
const reviews = [
    ['John', 5, 'It is my favorite book'],
    ['Mary', 3, 'I expected more from it :('],
    ['Clara', 5, 'Read it again and again!']
];
const book = new Book('Harry Potter', Genre.Fantasy, 980, { firstName: 'J.K.', lastName: 'Rowling', rating: 4.6 });
const notepad = {
    price: 40,
    getProductDescription: () => {
        return 'Notepad with Unicorn, 50 pages';
    }
};
// console.log(showRating(book.author), showRating(book))
showCart([book, notepad]);
console.log(getGenreName(book.genre));
