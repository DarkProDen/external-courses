var BooksView = function BooksView() {
};

BooksView.prototype.render = function render(books) {
    document.getElementById('books-container').innerHTML = '';
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
    /*
        var previousPenguin = this.element.querySelector('#previousPenguin');
        previousPenguin.addEventListener('click', this.onClickGetPenguin);
    */
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
}

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
}

BooksView.prototype.renderHistory = function renderCategories(history) {

}

BooksView.prototype.getCategories = function getCategories() {
    return document.getElementsByClassName("main-nav-btn categ-btn");
}