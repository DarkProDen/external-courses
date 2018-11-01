var obj={}
obj.stringParam="qwerty";
obj.numberParam=123;

var CopyObject = function(obj){
    resultObj={};
    for (var key in obj){
        resultObj[key]=obj[key];
    }   
    return resultObj;
}

var obj2=CopyObject(obj);
obj2["newParam"]="newParamValue";
console.log(obj);
console.log(obj2);


