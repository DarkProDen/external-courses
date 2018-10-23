//Написать функцию, которая возвращает случайное число в диапазоне [0; 100].

var GetRandom0_100 = function(){
    return Math.random()*100;
}

for (let index = 0; index < 10; index++) {
    console.log(GetRandom0_100());
}