var Controller = function Controller(booksView, booksModel) {
    this.booksView = booksView;
    this.booksModel = booksModel;
}

Controller.prototype.initialize = function initialize() {
    this.booksModel.loadBooks(this.booksView.render, this.booksModel);
    this.booksModel.loadCategories(this.booksView.renderCategories, this, this.booksModel);
};
Controller.prototype.onCategoryClick = function onCategoryClick() {
    let elementId = this.id;
    let category = booksModel.categories.find(function (category) {
        return 'category#' + category.id == elementId;
    });   
    let categoryType = category.type;
    booksModel.filterBooksByCategory(categoryType, booksView.render);
}