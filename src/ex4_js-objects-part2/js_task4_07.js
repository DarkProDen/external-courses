//Написать функцию, которая принимает два аргумента, строку и число. Если длина строки больше, 
//чем переданное число, то строка урезается и в конец добавляется «…», 
//так чтобы длина отрезанной строки вместе с «…» (многоточие) равнялась переданному числу.

var setLenght = function(str="", lenght=1){
    if (str.length>lenght)
    {
        str=str.substr(str, lenght-1)+"…";
    }
    return str;
}

setLenght("abcde", 4);