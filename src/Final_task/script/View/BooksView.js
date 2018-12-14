var BooksView = function BooksView() {
};

BooksView.prototype.render = function render(books) {
    //document.getElementById('books-container').innerHTML = '';
    console.log(books);
    books.forEach(book => {
        var newBook = document.createElement('div');
        newBook.id = 'b#' + book.id;
        newBook.className = "book";
        document.getElementById('books-container').appendChild(newBook);
        var bookImg = document.createElement('div');
        bookImg.className = "book__image";
        bookImg.style.background = "url('" + book.image_url + "') no-repeat";
        bookImg.style.backgroundSize = '100%';
        newBook.appendChild(bookImg);
        var bookTitle = document.createElement('div');
        bookTitle.className = "book__title";
        bookTitle.textContent = book.title;
        newBook.appendChild(bookTitle);
        var bookAuthor = document.createElement('div');
        bookAuthor.className = 'book__author';
        bookAuthor.textContent = 'by ' + book.author.firstName + ' ' + book.author.lastName;  //by Matthew Biggs
        newBook.appendChild(bookAuthor);
        var bookRating = document.createElement('div');
        bookRating.className = 'book__rating';
        for (let i = 0; i < 5; i++) {
            var star=document.createElement('div');
            if (i<book.rating) {
                star.className = 'star';
            }
            else {
                star.className = 'star empty-star';
            }
            bookRating.appendChild(star);        
        }
        newBook.appendChild(bookRating);
    });
    /*
        var previousPenguin = this.element.querySelector('#previousPenguin');
        previousPenguin.addEventListener('click', this.onClickGetPenguin);
    */
};