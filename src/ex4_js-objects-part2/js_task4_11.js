//Написать функцию, которая посчитает сколько раз каждый символ встречается в строке.

var CountChars = function(str=""){
    var result=[];
    for (let i = 0; i < str.length; i++) {
        var charMeet=false;
        for (let j = 0; j < result.length; j++) {
            if (result[j].Char===str[i])
           {
            result[j].Count++;
               charMeet=true;
               break;
           }
        }
        if (!charMeet)
        {
            result.push({Char: str[i], Count : 1});
        }
    }
    return result;
}

var charsInfo=CountChars("asdddsqwertyasdqwe");

charsInfo.forEach(element => {
    console.log(element);
});
