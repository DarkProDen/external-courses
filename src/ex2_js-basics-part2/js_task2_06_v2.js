var isSimple=function(number){
	var simpleNumbers=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
	if ((typeof number!=="number") || (number>1000) || (number<2))
		console.log("Невeрные данные.");
	else 
	{
		var result=true;
		for (var i=0; i<simpleNumbers.length; i++)
			if (number%simpleNumbers[i]===0 && number!==simpleNumbers[i])
			result=false;
		if (result)
			console.log("Число "+number+" - простое число.");
		else
			console.log("Число "+number+" - составное число.");
	}
}

isSimple(13);
isSimple(14);
isSimple(555);
isSimple(961);
isSimple(997);