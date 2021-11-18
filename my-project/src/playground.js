// class Book {
//     constructor (name, genre, pageAmount){
//         this.name = name
//         this.genre = genre
//         this.pageAmount = pageAmount
//     }
// }

// const books =[
//     new Book('Harry Potter', 'fantasy', 980),
//     new Book('Lord of the Ring', 'fantasy', 1001),
//     new Book('How to be productive', 'lifestyle', 500),
//     new Book('Game of Thrones', 'fantasy', 999)
// ]
// /**
//  * 
//  * @param {string} genre 
//  * @param {number} pagesLimit 
//  * @returns {Book}
//  */
// function findSuitableBook (genre, pagesLimit, multiRecommendations = true) {
//     const findAlgorithm = (book) =>{
//         return book.genre === genre && book.pageAmount <= pagesLimit
//     }
    
//     if (multiRecommendations) {
//         return books.filter(findAlgorithm)
//     } else {
//         return books.find(findAlgorithm)
//     }
// }

// const recommendedBook = findSuitableBook('fantasy', 1000)
// console.log(recommendedBook)

// // console.log(findSuitableBook('fantasy', 1000))
// // console.log(findSuitableBook('fantasy', '1000'))
// // console.log(findSuitableBook('fantasy'))
// // console.log(findSuitableBook(1000, 'fantasy'))
// // console.log(findSuitableBook(1000))
// // console.log(findSuitableBook())
