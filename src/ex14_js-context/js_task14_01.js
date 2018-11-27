function Calculator(){
    var value=0;
    function fetchData(callback){ 
        var promise = new Promise((resolve)=>{
            callback();
            resolve();
        });
        promise.then(function(){value=500;});
    }
    function getResult(){
        return value;
    }
    function setState(num=0){
        value=num;
    }
    function reset(){
        value=0;
        return this;
    }
    function add(num=0){
        value+=num;
        return this;
    }
    function subtract(num=0){
        value-=num;
        return this;
    }
    function divide(num=1){
        value/=num;
        return this;
    }
    function multiply(num=1){
        value*=num;
        return this;
    }
    return {fetchData, getResult, setState, reset, add, subtract, divide, multiply};
}

var calculator = new Calculator();
calculator.add(100);

calculator.reset();
console.log(calculator.getResult()); //0

calculator.setState(1);

console.log(calculator.getResult()); // 1

var xMLHttpRequest = function(){
    setTimeout(function(){},2000);
};

calculator.fetchData(xMLHttpRequest);

console.log(calculator.getResult());

setTimeout(function(){console.log(calculator.getResult());},5000);