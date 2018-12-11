//Написать функцию, которая возвращает случайное число в диапазоне [0; 100].

var getRandom0_100 = function(){
    return Math.random()*100;
}

for (let index = 0; index < 10; index++) {
    console.log(getRandom0_100());
}