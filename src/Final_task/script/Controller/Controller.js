var Controller = function Controller(view, model) {
    this.view = view;
    this.model = model;
}

Controller.prototype.initialize = function initialize() {
    this.model.loadBooks(this.view.render);

};