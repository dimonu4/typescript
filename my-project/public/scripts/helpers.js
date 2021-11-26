import { Book } from './book.js';
import { Genre } from './types.js';
export function serialize(value) {
    if (value == null) {
        return value + '';
    }
    if (value instanceof Book) {
        return `${value.name}, ${value.genre}, ${value.price}`;
    }
    return value.toString();
}
export function showRating(entity) {
    if (entity.rating == null) {
        return 'not rated yet';
    }
    const roundedRating = Math.round(entity.rating);
    let rating = '';
    for (let i = 0; i < roundedRating; i++) {
        rating += 'U+2B50';
    }
    return rating + `${entity.rating.toFixed(2)}`;
}
export function showCart(products) {
    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += product.price;
        console.log(`${product.getProductDescription()}, total cost: ${totalPrice}`);
    });
}
export function getGenreName(genre) {
    const genreMapping = {
        [Genre.Adventure]: 'adventure',
        [Genre.Fantasy]: 'fantasy',
        [Genre.Horror]: 'horror'
    };
    return genreMapping[genre];
}
