//Написать функцию, которая удаляет первый и последний пробел с строке и возвращает строку без начального и завершающего пробела.

var getStrWithoutFirstAndLastSpaces = function(str=""){
    if (str[0]===" ")
    {
        str=str.substr(1,str.length-1);
    }
    if (str[str.length-1]===" ")
    {
        str=str.substr(0,str.length-1);
    }
    return str;
}

getStrWithoutFirstAndLastSpaces("  123 ");