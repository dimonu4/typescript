export function getBookInfo(isbn) {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn)
        .then((response) => {
        return response.text();
    })
        .then((responseText) => {
        return JSON.parse(responseText);
    })
        .then((data) => {
        if (data.totalItems === 0) {
            throw Error(`There is no book with isbn ${isbn}.`);
        }
        return data.items[0];
    });
}
