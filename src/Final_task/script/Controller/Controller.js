var booksController = {
}

booksController.initialize = function () {
    booksModel.loadBooks(booksView.render);
    booksModel.loadCategories(booksView.renderCategories, this.onCategoryClick);
    booksView.renderFilters(this.onFilterClick);
    document.getElementById('search').addEventListener('keydown', this.onSearchKeyDown);
    document.getElementById('add-book-btn').addEventListener('click', this.onAddBookBtnClick);
    document.getElementById('add-book__submit').addEventListener('click', this.onAddBookSubmit);
    document.getElementById('add-book__cancel').addEventListener('click', this.onAddBookCancel);
};

booksController.onFilterClick = function () {
    let filter = this.value;
    booksModel.filterByFilter(filter, booksView.render);
}

booksController.onCategoryClick = function () {
    let elementId = this.id;
    let category = booksModel.categories.find(function (category) {
        return 'category#' + category.id == elementId;
    });
    let categoryType = category.type;
    booksModel.filterBooksByCategory(categoryType, booksView.render);
}

booksController.onSearchKeyDown = function () {
    if (event.key === 'Enter') {
        booksModel.filterBySearch(this.value, booksView.render);
    }
}

booksController.onAddBookBtnClick = function () {
    booksView.hideBooks();
    booksView.openAddBookForm();
}

booksController.onAddBookSubmit = function () {
    booksModel.addBook(booksView.getBookFromForm(), booksView.render);
    booksView.hideAddBookForm();
    booksView.openBooks();
}

booksController.onAddBookCancel = function () {
    booksView.hideAddBookForm();
    booksView.openBooks();
}

document.addEventListener('DOMContentLoaded', function () {
    booksController.initialize();
}, false);