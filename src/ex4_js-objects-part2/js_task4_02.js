//Написать функцию, которая создает пустой объект, но без прототипа.

var CreateObjWithoutProto = function(){
    return Object.create(null);
}

var obj= CreateObjWithoutProto();
obj;