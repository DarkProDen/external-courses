var BooksModel = function () {
    this.books = [];
    this.displayedBooks = [];
    this.searchString = '';
    this.categories = [{ id: 1, title: "Must Read Titles", type: "must_read", color: "#ff517e" }];
}

BooksModel.prototype.loadData = function loadData(url, callback) {
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

BooksModel.prototype.loadBooks = function loadBooks(callback, model) {
    this.loadData('https://rsu-library-api.herokuapp.com/books',
        function setBooks(books) {
            model.books = books;
            callback(model.books);
        });
}

BooksModel.prototype.loadCategories = function loadCategories(callback, controller, model) {
    this.loadData('https://rsu-library-api.herokuapp.com/categories',
        function setCategories(categories) {
            model.categories = categories;
            callback(model.categories, controller);
        });
}

BooksModel.prototype.filterBooksByCategory = function filterBooksByCategory(categoryType, callback) {
    this.displayedBooks = this.books.filter(function (book) { return book.categories.includes(categoryType); });
    callback(this.displayedBooks);
}

BooksModel.prototype.addBook = function addBook(book) {
    this.books.push(book);
}
