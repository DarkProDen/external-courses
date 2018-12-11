//Написать функцию, которая создает пустой объект, но без прототипа.

var createObjWithoutProto = function(){
    return Object.create(null);
}

var obj= createObjWithoutProto();
obj;