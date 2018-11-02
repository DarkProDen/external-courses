var obj={}
obj.stringParam="qwerty";
obj.numberParam=123;

var checkParamAndGetObj = function(keyName ,obj){
    resultObj={};
    haveKey=false;
    for (var key in obj){
        resultObj[key]=obj[key];
        if (keyName===key){
            haveKey=true;            
        }
    }   
    if (haveKey) {
        return obj;
    }
    else{
        resultObj[keyName]='new';
        return resultObj;
    }   
}

console.log(checkParamAndGetObj("stringParam",obj));
console.log(checkParamAndGetObj("stringParam1",obj));


