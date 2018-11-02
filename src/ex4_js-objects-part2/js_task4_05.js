//Написать функцию, которая ищет одну строку в другой строке и возвращает `true`, если такая строка найдена.

var searchSubstr = function(str="", substr){
    return -1<str.search(substr);
}

searchSubstr("babcbbb","b");
searchSubstr("babcbbb","b123");