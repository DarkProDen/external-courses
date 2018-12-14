var Controller = function Controller(booksView, booksModel) {
    this.booksView = booksView;
    this.booksModel = booksModel;
}

Controller.prototype.initialize = function initialize() {
    this.booksModel.loadBooks(this.booksView.render);
};