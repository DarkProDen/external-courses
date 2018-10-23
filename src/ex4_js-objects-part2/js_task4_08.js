//Написать функцию, которая принимает строку и возвращает данную строку, но в lowerCamelCase нотации.

var SetLowerCamelCase = function(str=""){
    str= str[0].toLowerCase() + str.substring(1,str.length);
    var newWord=false;
    for (let index = 0; index < str.length; index++) {
        if (newWord)
        {
            str= str.substring(0,index-1) + str[index].toUpperCase() + str.substring(index+1,str.length);
            newWord=false;
        }
        if(str[index]===" ")
        {
            newWord=true;
        }
    }  
    return str;
}

SetLowerCamelCase("SQL data picker");