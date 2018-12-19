var booksController = {
}

booksController.initialize = function () {
    booksModel.loadBooks(booksView.render);
    booksModel.loadCategories(booksView.renderCategories, this);
    booksView.renderFilters(this);
    document.getElementById('search').addEventListener('keydown', this.onSearchKeyDown);
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

/*var Controller = function Controller() {
}

Controller.prototype.constructor = Controller;

Controller.prototype.initialize = function initialize() {
    console.log(this);
    booksModel.loadBooks(this.booksView.render, booksModel);
    booksModel.loadCategories(this.booksView.renderCategories, this, booksModel);
    this.booksView.renderFilters(this);
    //this.booksView.renderHistory(booksModel.us());
};

Controller.prototype.onFilterClick = function onFilterClick() {
    console.log(window);
    let filter = this.value;
    document.controller.booksModel.filterByFilter(filter, window.controller.booksView.render);
}

Controller.prototype.onCategoryClick = function onCategoryClick() {
    let elementId = this.id;
    let category = booksModel.categories.find(function (category) {
        return 'category#' + category.id == elementId;
    });
    let categoryType = category.type;
    booksModel.filterBooksByCategory(categoryType, this.booksView.render);
}
*/