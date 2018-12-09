function showData(data) {
    console.log(data);
    data.forEach(obj => {
        var newObj = document.createElement('div');
        document.body.appendChild(newObj);
        for (key in obj) {
            newObj.textContent += obj[key] + ' ';
        }
    });
}
/*
function showBooks(books) {
    console.log(books);
    books.forEach(book => {
        var newBook = document.createElement('div');
        document.body.appendChild(newBook);
        for (key in book) {
            newBook.textContent += book[key] + ' ';
        }
    });
}
*/
getAndShowData('https://rsu-library-api.herokuapp.com/books', showData);
getAndShowData('https://rsu-library-api.herokuapp.com/filters', showData);
getAndShowData('https://rsu-library-api.herokuapp.com/categories', showData);
//showBooks(books);
