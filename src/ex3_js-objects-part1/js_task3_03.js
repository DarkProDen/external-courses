var obj={}
obj.stringParam="qwerty";
obj.numberParam=123;

var CheckObjectParam = function(keyName ,obj){
    for (var key in obj){
        if (keyName===key){
            return true;          
        }
    } 
    return false;  
}

console.log(CheckObjectParam("stringParam",obj));
console.log(CheckObjectParam("stringParam1",obj));


