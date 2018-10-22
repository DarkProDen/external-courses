var IsSimple=function(number){
	var simpleNumbers=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
	if ((typeof number!=="number") || (number>1000) || (number<2))
		console.log("Невeрные данные.");
	else 
	{
		var isSimple=true;
		for (var i=0; i<simpleNumbers.length; i++)
			if (number%simpleNumbers[i]===0 && number!==simpleNumbers[i])
				isSimple=false;
		if (isSimple)
			console.log("Число "+number+" - простое число.");
		else
			console.log("Число "+number+" - составное число.");
	}
}

IsSimple(13);
IsSimple(14);
IsSimple(555);
IsSimple(961);
IsSimple(997);