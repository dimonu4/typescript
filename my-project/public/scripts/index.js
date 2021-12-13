import { Book } from './book.js';
import { Genre } from './types.js';
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
// const reviews: Review[] = [
//   ['John', 5, 'It is my favorite book'],
//   ['Mary', 3, 'I expected more from it :('],
//   ['Clara', 5, 'Read it again and again!']
// ]
// const book = new Book('Harry Potter',
//   Genre.Fantasy, 980,
//   {firstName: 'J.K.', lastName:'Rowling', rating: 4.6})
// const notepad: Product = {
//   price: 40,
//   getProductDescription: () => {
//     return 'Notepad with Unicorn, 50 pages'
//   }
// }
// console.log(showRating(book.author), showRating(book))
// showCart([book, notepad])
// console.log(getGenreName(book.genre))
// const foundBook = getFromMap(
//   programmingLiterature, 'Cracking the coding interview'
// )
// console.log(foundBook)
// console.log(programmingLiterature.size)
// console.log(programmingLiterature.has('Cracking the coding interview'))
// programmingLiterature.clear()
// console.log(programmingLiterature.delete('Cracking the coding interview'))
// new Collection<boolean, Book>()
// new Collection<object, Book>()
// new Collection<Book, Book>()
// new Collection<Book, number>()
// new Collection<Book, string>()
// new Collection<Book, symbol>()
// new Collection <Book>()
// const jkRowling: Author = {
//   firstName: 'J.K',
//   lastName: 'Rowling',
//   rating: 4.6
// }
// const harryPotter = new Book('Harry Potter', Genre.Fantasy, 500, jkRowling)
// const magicCreatures = new Book('Magic Creatures', Genre.Fantasy, 340, jkRowling)
// const unicornNotepad = new Notepad('Unicorn power', 30)
// const cart = new ProductCollection()
// cart.set(harryPotter.name, harryPotter)
// cart.set(magicCreatures.name, magicCreatures)
// cart.set(unicornNotepad.name, unicornNotepad)
// const favoriteBooksShelf = new BookCollection()
// favoriteBooksShelf.set(harryPotter.name, harryPotter)
// favoriteBooksShelf.set(magicCreatures.name, magicCreatures)
// function getSummary(collection: Collection<unknown>):string {
//   if(collection instanceof BookCollection) {
//     return `Total ${cart.size} books on the shelf.`
//   }
//   if(collection instanceof ProductCollection) {
//     return `Total ${cart.price}p. for ${cart.size} items`
//   }
//   return 'No special summary for this kind of collection'
// }
// console.log(getSummary(cart))
// console.log(getSummary(favoriteBooksShelf))
// const bookNameRequest = Promise.resolve('Harry Potter')
// bookNameRequest.then((name) =>{
//   console.log(name.toUpperCase())
// })
// const harryPotterIsbn = '9781408845646'
// getBookInfo(harryPotterIsbn)
//   .then((book) => {
//     console.log(
//       book.volumeInfo.title,
//       book.volumeInfo.description,
//       book.volumeInfo.authors[0]
//     )
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// const author: Partial<Author> = {
//   firstName: 'J. K',
//   lastName: 'Rowling'
// }
// const book = new Book('Harry Potter', Genre.Fantasy, 100, author)
// console.log(book)
// interface OptionalAuthor extends Partial<Ratingable> {
//   firstName?: string
//   lastName?: string
//   birthDate?: Date
//   booksWritten?: number
// }
// const OptionalAuthor: OptionalAuthor = {
//   rating: 5,
//   booksWritten:10
// }
// const fullAuthor: Required<OptionalAuthor> = {
//   firstName: 'J. K.',
//   lastName: 'Rowling',
//   birthDate: new Date(),
//   booksWritten: 15,
//   rating: 4.7
// }
const author = {
    firstName: 'J. K',
    lastName: 'Rowling'
};
const book = new Book('Harry Potter', Genre.Fantasy, 100, author);
console.log(book);
