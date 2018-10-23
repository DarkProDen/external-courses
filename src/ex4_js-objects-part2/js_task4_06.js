//Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавным первым символом каждого слова.

var SetAllFirstCharsUpper = function(str=""){
    var newWord=true;
    for (let index = 0; index < str.length; index++) {
        if (newWord)
        {
            str= str.substring(0,index) + str[index].toUpperCase() + str.substring(index+1,str.length);
            newWord=false;
        }
        if(str[index]===" ")
        {
            newWord=true;
        }
    }  
    return str;
}

SetAllFirstCharsUpper("abc fbfds gfdg qwertyuio");