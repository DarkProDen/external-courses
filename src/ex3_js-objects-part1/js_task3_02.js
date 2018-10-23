var obj={}
obj.stringParam="qwerty";
obj.numberParam=123;

var LogObjectParams = function(obj){
    for (var key in obj){
        console.log(key+": "+obj[key]);
    }   
}

LogObjectParams(obj);


