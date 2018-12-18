var BooksModel = function () {
    this.books = [];
    this.searchString='';
    this.categories=[];
}
BooksModel.prototype = Object.create(Model.prototype);
BooksModel.prototype.constructor = BooksModel;

BooksModel.prototype.loadBooks = function loadBooks(callback) {
    this.loadData('https://rsu-library-api.herokuapp.com/books',
        function setBooks(books) {
            this.books = books;
            callback(this.books);
        });
}

BooksModel.prototype.addBook = function addBook(book) {
    this.books.push(book);
}
