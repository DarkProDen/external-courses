var shape = {
    name: 'name1',
    type: 'shape',
    getType: function () {
        return this.type;
    },
    getPerimeter: function () {
    },
    draw: function () {
        console.log(this.name + ' is drawn');
    }
}

var Triangle = function (name, a, b, c) {
    this.type = 'Triangle';
    this.name = name;
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

var tr = new Triangle('tr1', 1, 2, 3);
tr.draw();
console.log('Type: ' + tr.getType());
console.log('Perimeter: ' + tr.getPerimeter());

var Square = function (name, a) {
    this.type = 'Square';
    this.name = name;
    this.a = a;
}
Square.prototype = shape;
Square.prototype.getPerimeter = function () {
    return this.a * 4;
}

var Rectangle = function (name, a, b) {
    this.type = 'Rectangle';
    this.name = name;
    this.a = a;
    this.b = b;
}
Rectangle.prototype = new Square();
Rectangle.prototype.getPerimeter = function () {
    return this.a * 2 + this.b * 2;
}

var rec = new Rectangle('rec1', 1, 2);
rec.draw();
console.log('Type: ' + rec.getType());
console.log('Perimeter: ' + rec.getPerimeter());