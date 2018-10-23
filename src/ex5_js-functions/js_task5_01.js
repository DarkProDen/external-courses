//Создать калькулятор, который может выполнять операции сложения, вычитания, деления и умножения.

function Calculator(){
    var value=0;
    function getResult(){
        return value;
    }
    function reset(){
        return value=0;
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
    return {getResult, reset, add, subtract, divide, multiply};
}

var calculator = new Calculator();

console.log(calculator.getResult()); // 0
calculator.add(4);
calculator.subtract(1);
console.log(calculator.getResult()); // 3
calculator.subtract(3);
console.log(calculator.getResult()); // 0
calculator.add(4)(1);
console.log(calculator.getResult()); // 5
calculator.subtract(1)(1)(1)(1)(1);
console.log(calculator.getResult()); // 0
calculator.multiply(5);
console.log(calculator.getResult()); // 0
calculator.add(1)(1)(1)(2); //5
console.log(calculator.getResult()); // 5
calculator.multiply(2)(5);
console.log(calculator.getResult()); // 50
calculator.divide(2);
console.log(calculator.getResult()); // 25
console.log(calculator.reset());