//Написать функцию, которая возвращает целое случайное число в диапазоне от [`min`; `max`].

var GetRandomInt = function(min=0, max=10){
    if (max-min>=1)
    {
        var result;
        result= min + Math.random() * (max + 1 - min);
        result= Math.floor(result);
        return result;
    }
    else
    {
        return null;
    }
}

for (let index = 0; index < 10; index++) {
    console.log(GetRandomInt(-5,5));
}

