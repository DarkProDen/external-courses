var booksView = {

};
booksView.onBookImgError = function () {
    this.src = 'http://rsu-library-api.herokuapp.com/static/images/nocover.jpg';
    booksModel.books.find((book) => {
        return 'book#' + book.id == this.closest('.book').id;
    }).image_url = 'http://rsu-library-api.herokuapp.com/static/images/nocover.jpg';
}

booksView.render = function (books) {
    document.getElementById('books-container').innerHTML = '';
    books.forEach(book => {
        let newBook = document.createElement('div');
        newBook.id = 'book#' + book.id;
        newBook.className = "book";
        document.getElementById('books-container').appendChild(newBook);
        let bookImg = document.createElement('img');
        bookImg.className = "book__image";
        bookImg.onerror = booksView.onBookImgError;
        bookImg.src = book.image_url;
        newBook.appendChild(bookImg);
        let bookTitle = document.createElement('div');
        bookTitle.className = "book__title";
        bookTitle.textContent = book.title;
        newBook.appendChild(bookTitle);
        let bookAuthor = document.createElement('div');
        bookAuthor.className = 'book__author';
        bookAuthor.textContent = 'by ' + book.author.firstName + ' ' + book.author.lastName;  //by Matthew Biggs
        newBook.appendChild(bookAuthor);
        let bookRating = document.createElement('div');
        bookRating.className = 'book__rating';
        for (let i = 0; i < 5; i++) {
            let star = document.createElement('div');
            if (i < book.rating) {
                star.className = 'star';
            }
            else {
                star.className = 'star empty-star';
            }
            bookRating.appendChild(star);
        }
        newBook.appendChild(bookRating);
    });
    booksView.renderHistory(booksModel.getRecentBooks());
};

booksView.renderCategories = function (categories, onCategoryClick) {
    document.getElementById('categories-container').innerHTML = '';
    categories.forEach(category => {
        var newCategory = document.createElement('input');
        var id = 'category#' + category.id;
        newCategory.type = 'button';
        newCategory.id = id;
        newCategory.className = "main-nav-btn categ-btn";
        newCategory.value = category.title;
        newCategory.addEventListener('click', onCategoryClick, false);
        document.getElementById('categories-container').appendChild(newCategory);
        var newLabel = document.createElement('label');
        newLabel.htmlFor = id;
        newLabel.style.background = category.color;
        document.getElementById('categories-container').appendChild(newLabel);
    });
};

booksView.renderFilters = function (onFilterClick) {
    let cont = document.getElementById('filters-container');
    cont.innerHTML = '';
    let filters = ['All Books', 'Most Recent', 'Most Popular', 'Free Books'];
    filters.forEach(filter => {
        var newFilter = document.createElement('input');
        newFilter.type = 'button';
        newFilter.className = 'filter';
        newFilter.value = filter;
        newFilter.addEventListener('click', onFilterClick, false);
        document.getElementById('filters-container').appendChild(newFilter);
    });
};

booksView.renderHistory = function (recentBooks) {
    innerHTML = '';
    recentBooks.forEach(book => {
        innerHTML +=
            '<div class="history-item">' +
            '<div class="history-item__icon"></div>' +
            '<div class="history-item__text">';
        if (book.createdAt === book.updatedAt) {
            innerHTML += 'You added ';
        }
        else {
            innerHTML += 'You updated ';
        }
        let dateNow = new Date(Date.now());
        let updateDate = new Date(book.updatedAt);
        let timeAgo = {}
        timeAgo.days = Math.trunc((dateNow - updateDate) / (1000 * 60 * 60 * 24));
        timeAgo.hours = Math.trunc((dateNow - updateDate) / (1000 * 60 * 60) % 24);
        timeAgo.minutes = Math.trunc((dateNow - updateDate) / (1000 * 60) % (24 * 60)) - 60 * timeAgo.hours;
        timeAgo.seconds = Math.trunc((dateNow - updateDate) / (1000) % (24 * 60 * 60)) - 3600 * timeAgo.hours - 60 * timeAgo.minutes;
        let timeAgoStr = '';
        for (let key in timeAgo) {
            if (timeAgo[key] !== 0) {
                timeAgoStr += timeAgo[key] + ' ' + key + ' ';
            }
        }
        if (timeAgoStr === '') {
            timeAgoStr = 'just now';
        }
        else {
            timeAgoStr += 'ago';
        }
        innerHTML +=
            '<a href="">' + book.title + '</a> by ' +
            '<a href="">' + book.author.firstName + ' ' + book.author.lastName + '</a>' +
            '<br>' +
            '<br>' + timeAgoStr +
            '</div>' +
            '</div>'
    });

    let cont = document.getElementById('history-container');
    cont.innerHTML = innerHTML;
};

booksView.openAddBookForm = function () {
    this.addBookForm = document.getElementById('add-book');
    this.addBookForm.hidden = '';
}

booksView.hideBooks = function () {
    this.booksContainer = document.getElementById('books-container');
    this.booksContainer.hidden = 'hidden';
}

booksView.getBookFromForm = function () {
    let dateNow = Date.now();
    return new Book(
        null,
        document.getElementById('add-book__title').value,
        new Author(document.getElementById('add-book__author-firstName').value,
            document.getElementById('add-book__author-lastName').value),
        document.getElementById('add-book__rating').value,
        document.getElementById('add-book__cost').value,
        [],
        dateNow,
        dateNow,
        document.getElementById('add-book__image_url').value
    )
}

booksView.hideAddBookForm = function () {
    let fields = this.addBookForm.getElementsByClassName('field');
    for (let element of fields) {
        element.value = '';
    }
    this.addBookForm.hidden = 'hidden';
}

booksView.openBooks = function () {
    this.booksContainer.hidden = '';
}

booksView.getCategories = function () {
    return document.getElementsByClassName("main-nav-btn categ-btn");
};