import { Book } from './book.js'
import { Collection } from './collection.js'
import { Product } from './product.js'

// export const books =[
//   new Book('Harry Potter and Philosophers Stone', 'fantasy', 980),
//   new Book('Lord of the Ring', 'fantasy', 1001),
//   new Book('How to be productive', 'lifestyle', 500),
//   new Book('Game of Thrones', 'fantasy', 999)
// ]

// export interface BookCollection {
//   [key: string]: Book
// }

// export interface Collection<T> {
//   [key:string]: T
// }

// export const programmingLiterature: Collection<Book> = {
//   'Cracking the coding interview': new Book(
//     'Cracking the coding interview', 4, 100,
//     {
//       firstName: 'Gayle',
//       lastName: 'Laakmann',
//       rating: 5
//     }
//   )
// }

// export function getFromShelf(shelf: Collection<Book>, bookName: string): Book{
//   const book = shelf[bookName]
//   if(book == null) {
//     throw Error('There is no such book on the shelf.')
//   }
//   return book
// }

// export const programmingLiterature: Collection<Book,string> = new Collection()

// programmingLiterature.set(
//   'Cracking the coding interview',
//   new Book(
//     'Cracking the coding interview', 4, 100,
//     {
//       firstName: 'Gayle',
//       lastName: 'Laakmann',
//       rating: 5
//     }
//   )
// )

// export function getFromShelf(shelf: Map<string, Book>, bookName: string): Book {
//   const book = shelf.get(bookName)

//   if(book == null) {
//     throw Error('There is no such book on the shelf.')
//   }

//   return book
// }

// export function getFromMap<K,V>(data: Collection<K, V>, key: K): V {
//   const value = data.get(key)

//   if(value == null) {
//     throw Error('There is no such book on the shelf.')
//   }

//   return value
// }

export class ProductCollection<T extends Product> extends Collection<T>{
  get price():number{
    let totalPrice = 0
    const keys = Object.getOwnPropertyNames(this.items)

    for(const key of keys) {
      const item = this.items[key]
      totalPrice += item.price
    }

    return totalPrice
  }
}

export class BookCollection extends ProductCollection<Book>{}
