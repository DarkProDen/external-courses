//Создать калькулятор, который может выполнять операции сложения, вычитания, деления и умножения.

function Calculator(){
    var value=0;
    function getResult(){
        return value;
    }
    function add(num=0){
        value+=num;
        return add;
    }
    function subtract(num=0){
        value-=num;
        return subtract;
    }
    function divide(num=1){
        value/=num;
        return divide;
    }
    function multiply(num=1){
        value*=num;
        return multiply;
    }
    return {getResult, add, subtract, divide, multiply};
}

var calclator = new Calculator();

console.log(calclator.getResult()); // 0
calclator.add(4);
calclator.subtract(1);
console.log(calclator.getResult()); // 3
calclator.subtract(3);
console.log(calclator.getResult()); // 0
calclator.add(4)(1);
console.log(calclator.getResult()); // 5
calclator.subtract(1)(1)(1)(1)(1);
console.log(calclator.getResult()); // 0
calclator.multiply(5);
console.log(calclator.getResult()); // 0
calclator.add(1)(1)(1)(2); //5
console.log(calclator.getResult()); // 5
calclator.multiply(2)(5);
console.log(calclator.getResult()); // 50
calclator.divide(2);
console.log(calclator.getResult()); // 25