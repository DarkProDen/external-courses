//Написать функцию, которая складывает два числа и результат округляется до 3го знака после запятой. Возвращаемый результат должен быть числом.

var SumAndRound = function(num1, num2){
    var result=num1+num2;
    result=Math.round(result*1000)/1000;
    return result;
}

console.log(SumAndRound(123.012345, 321.654321));
