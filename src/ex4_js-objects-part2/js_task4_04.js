//Написать функцию, которая принимает строку и возвращает эту же строку, на с заглавным первым символом.

var setFirstCharUpper = function(str=""){
    return str[0].toUpperCase()+str.substr(1,str.length-1);
}

setFirstCharUpper("abc");