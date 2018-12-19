document.addEventListener('DOMContentLoaded', function () {
    booksController.initialize();
}, false);
/*
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

function showBooks(books) {
    books.forEach(book => {
        var newBook = document.createElement('div');
        newBook.id = 'b#' + book.id;
        newBook.className = "book";
        document.getElementById('books-container').appendChild(newBook);
        var bookImg = document.createElement('div');
        bookImg.className = "book__image";
        bookImg.style.background = "url(" + book.image_url + ") no-repeat";
        newBook.appendChild(bookImg);
        var bookTitle = document.createElement('div');
        bookTitle.className = "book__title";
        bookTitle.textContent = book.title;
        newBook.appendChild(bookTitle);
        var bookAuthor = document.createElement('div');
        bookAuthor.className = 'book__title';
    });
}
getAndShowData('https://rsu-library-api.herokuapp.com/books', showData);
getAndShowData('https://rsu-library-api.herokuapp.com/books', showBooks);
getAndShowData('https://rsu-library-api.herokuapp.com/filters', showData);
getAndShowData('https://rsu-library-api.herokuapp.com/categories', showData);
//showBooks(books);
*/