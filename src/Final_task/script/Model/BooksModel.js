var booksModel = {
    books: [],
    displayedBooks: [],
    searchString: '',
    categories: []
}

booksModel.loadData = function (url, callback) {
    var httpRequest;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var loadResponse = function () {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                try {
                    callback(JSON.parse(httpRequest.responseText));
                } catch (e) {
                    alert(e.message);
                }
            } else {
                alert('Не удалось получить данные: ' + url);
            }
        }
    }
    httpRequest.onreadystatechange = loadResponse;
    httpRequest.open('GET', url, true);
    httpRequest.send();
};

booksModel.loadBooks = function (render) {
    this.loadData('https://rsu-library-api.herokuapp.com/books',
        function setBooks(books) {
            booksModel.books = books;
            render(booksModel.books);
        });
}

booksModel.loadCategories = function (renderCategories, onCategoryClick) {
    this.loadData('https://rsu-library-api.herokuapp.com/categories',
        function setCategories(categories) {
            booksModel.categories = categories;
            renderCategories(booksModel.categories, onCategoryClick);
        });
}

booksModel.filterBooksByCategory = function (categoryType, callback) {
    this.displayedBooks = this.books.filter(function (book) { return book.categories.includes(categoryType); });
    callback(this.displayedBooks);
}

booksModel.getRecentBooks = function () {
    let sortedBooks = Object.create(this.books);
    function compareDates(bookA, bookB) {
        return bookB.updatedAt - bookA.updatedAt;
    }
    sortedBooks.sort(compareDates);
    let recentBooks = [sortedBooks[0], sortedBooks[1], sortedBooks[2]];
    return recentBooks;
}

booksModel.filterByFilter = function (filter, callback) {
    switch (filter) {
        case 'All Books':
            this.displayedBooks = this.books;
            break;
        case 'Most Recent':
            this.displayedBooks = this.getRecentBooks();
            break;
        case 'Most Popular':
            this.displayedBooks = this.books.filter(function (book) { return book.rating == 5; });
            break;
        case 'Free Books':
            this.displayedBooks = this.books.filter(function (book) { return book.cost == 0; });
            break;
        default:
            this.displayedBooks = this.books;
            break;
    }
    callback(this.displayedBooks);
}

booksModel.filterBySearch = function (searchString, callback) {
    this.displayedBooks = this.books.filter(function (book) {
        return book.title.includes(searchString)
            || (book.author.firstName + ' ' + book.author.lastName).includes(searchString);
    });
    callback(this.displayedBooks);
}
booksModel.getNewBookId = function () {
    let id = 1;
    this.books.forEach(book => {
        if (book.id >= id) {
            id = book.id + 1;
        }
    });
    return id;
}
booksModel.addBook = function (book, render) {
    book.id = this.getNewBookId();
    this.books.push(book);
    render(this.books);
}