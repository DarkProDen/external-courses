//Написать функцию, которая ищет одну строку в другой строке и возвращает `true`, если такая строка найдена.

var SearchSubstr = function(str="", substr){
    return -1<str.search(substr);
}

SearchSubstr("babcbbb","b");
SearchSubstr("babcbbb","b123");