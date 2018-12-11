//Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе переданного объекта (объект создать заранее через Object.create()).

var protObj ={A:1,B:2}
var Obj=Object.create(protObj);
Obj.A=111;
Obj.B=222;

var getPrototypeProp = function(obj, propName){
    return obj.__proto__[propName];
}

console.log(getPrototypeProp(Obj,"A"));
console.log(Obj.A);
console.log(getPrototypeProp(Obj,"B"));