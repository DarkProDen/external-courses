var obj={}
obj.stringParam="qwerty";
obj.numberParam=123;

var checkObjectParam = function(keyName ,obj){
    for (var key in obj){
        if (keyName===key){
            return true;          
        }
    } 
    return false;  
}

console.log(checkObjectParam("stringParam",obj));
console.log(checkObjectParam("stringParam1",obj));


