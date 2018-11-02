var copyObject = function(obj){
    var resultObj={};
    for (var key in obj){
        if (typeof obj[key]==="object") {
            resultObj[key]=copyObject(obj[key]);
        }
        else{
            resultObj[key]=obj[key];
        }
    }   
    return resultObj;
}

var obj={}
obj.stringParam="qwerty";
obj.numberParam=123;
obj.objectParam={objPar: { num: 111, num2: 222}, num: 123};

var obj2=copyObject(obj);
obj2["newParam"]="newParamValue";
obj2.objectParam.objPar.NEWPARAM="NEW";
console.log(obj);
console.log(obj2);


