var booksView = {
};

booksView.render = function (books) {
    document.getElementById('books-container').innerHTML = '';
    books.forEach(book => {
        var newBook = document.createElement('div');
        newBook.id = 'book#' + book.id;
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
            var star = document.createElement('div');
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
            nnerHTML += 'You added ';

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
        innerHTML +=
            '<a href="">' + book.title + '</a> by ' +
            '<a href="">' + book.author.firstName + ' ' + book.author.lastName + '</a>' +
            '<br>' +
            '<br>' + timeAgoStr + 'ago' +
            '</div>' +
            '</div>'
    });

    let cont = document.getElementById('history-container');
    cont.innerHTML = innerHTML;
};

booksView.getCategories = function () {
    return document.getElementsByClassName("main-nav-btn categ-btn");
};

/*var BooksView = function BooksView() {
};

BooksView.prototype.constructor=BooksView;

BooksView.prototype.renderHistory = function renderHistory(recentBooks) {
    console.log(recentBooks);
    innerHTML = '';
    recentBooks.forEach(book => {
        innerHTML +=
            '<div class="history-item">' +
            '<div class="history-item__icon"></div>' +
            '<div class="history-item__text">';
        if (book.createdAt === book.updatedAt) {
            nnerHTML += 'You added ';

        }
        else {
            innerHTML += 'You updated ';
        }
        let timeAgo = Date.now() - book.updatedAt;
        innerHTML +=
            '<a href="">' + book.title + '</a> by ' +
            '<a href="">' + book.author.firstName + ' ' + book.author.lastName + 'k</a>' +
            '<br>' +
            '<br>' + timeAgo + ' ago' +
            '</div>' +
            '</div>'
    });

    let cont = document.getElementById('history-container');
    cont.innerHTML = innerHTML;
};

BooksView.prototype.render = function render(books) {
    document.getElementById('books-container').innerHTML = '';
    books.forEach(book => {
        var newBook = document.createElement('div');
        newBook.id = 'book#' + book.id;
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
            var star = document.createElement('div');
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
};

BooksView.prototype.renderCategories = function renderCategories(categories, controller) {
    document.getElementById('categories-container').innerHTML = '';
    categories.forEach(category => {
        var newCategory = document.createElement('input');
        var id = 'category#' + category.id;
        newCategory.type = 'button';
        newCategory.id = id;
        newCategory.className = "main-nav-btn categ-btn";
        newCategory.value = category.title;
        newCategory.addEventListener('click', controller.onCategoryClick, false);
        document.getElementById('categories-container').appendChild(newCategory);
        var newLabel = document.createElement('label');
        newLabel.htmlFor = id;
        newLabel.style.background = category.color;
        document.getElementById('categories-container').appendChild(newLabel);
    });
};

BooksView.prototype.renderFilters = function renderFilters(controller) {
    let cont = document.getElementById('filters-container');
    cont.innerHTML = '';
    let filters = ['All Books', 'Most Recent', 'Most Popular', 'Free Books'];
    filters.forEach(filter => {
        var newFilter = document.createElement('input');
        newFilter.type = 'button';
        newFilter.className = 'filter';
        newFilter.value = filter;
        newFilter.addEventListener('click', controller.onFilterClick, false);
        document.getElementById('filters-container').appendChild(newFilter);
    });
};

BooksView.prototype.getCategories = function getCategories() {
    return document.getElementsByClassName("main-nav-btn categ-btn");
};
*/