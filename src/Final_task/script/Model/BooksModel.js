var booksModel = {
    books: [],
    displayedBooks: [{
        id: 1, title: "Jewels of Nizam", author: { firstName: "Geeta", lastName: "Devi" },
        rating: 5, cost: 100, categories: ["must_read", "best", "non_fiction"],
        createdAt: 1506943763424, updatedAt: 1528046197707,
        image_url: "http://rsu-library-api.herokuapp.com/static/images/JewelsOfNizam.jpg"
    }],
    searchString: '',
    categories: [{ id: 1, title: "Must Read Titles", type: "must_read", color: "#ff517e" }]
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
            this.displayedBooks = this.books.filter(function (book) { return book.rating === 5; });
            break;
        case 'Free Books':
            this.displayedBooks = this.books.filter(function (book) { return book.cost === 0; });
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
            || (book.author.firstName+' '+book.author.lastName).includes(searchString);
    });
    callback(this.displayedBooks);
}

booksModel.addBook = function (book) {
    this.books.push(book);
}


/*var BooksModel = function () {
    this.books = [];
    this.displayedBooks = [{
        id: 1, title: "Jewels of Nizam", author: { firstName: "Geeta", lastName: "Devi" },
        rating: 5, cost: 100, categories: ["must_read", "best", "non_fiction"],
        createdAt: 1506943763424, updatedAt: 1528046197707,
        image_url: "http://rsu-library-api.herokuapp.com/static/images/JewelsOfNizam.jpg"
    }];
    this.searchString = '';
    this.categories = [{ id: 1, title: "Must Read Titles", type: "must_read", color: "#ff517e" }];
}
BooksModel.prototype.constructor=BooksModel;

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

BooksModel.prototype.loadBooks = function loadBooks(render, model) {
    this.loadData('https://rsu-library-api.herokuapp.com/books',
        function setBooks(books) {
            model.books = books;
            render(model.books);
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

BooksModel.prototype.useRecentBooks = function useRecentBooks(callback) {
    let sortedBooks = Object.create(this.books);
    function compareDates(bookA, bookB) {
        return bookB.updatedAt - bookA.updatedAt;
    }
    sortedBooks.sort(compareDates);
    let recentBooks =[sortedBooks[0], sortedBooks[1], sortedBooks[2]];
    callback(recentBooks);
    return recentBooks;
}

BooksModel.prototype.filterByFilter = function filterByFilter(filter, callback) {
    switch (filter) {
        case 'All Books':
            this.displayedBooks = this.books;
            break;
        case 'Most Recent':
            this.displayedBooks = this.useRecentBooks(()=>{;});
            break;
        case 'Most Popular':
            this.displayedBooks = this.books.filter(function (book) { return book.rating === 5; });
            break;
        case 'Free Books':
            this.displayedBooks = this.books.filter(function (book) { return book.cost === 0; });
            break;
        default:
            this.displayedBooks = this.books;
            break;
    }
    callback(this.displayedBooks);
}

BooksModel.prototype.addBook = function addBook(book) {
    this.books.push(book);
}
*/