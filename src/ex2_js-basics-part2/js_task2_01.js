var getType=function (variable) {
	if (typeof (variable) ==="string")
	{
		console.log("это строка");
	}
	else 
		if (typeof (variable) ==="number")
			console.log("это число");
		else
			console.log("это не строка и не число");		
}

getType("123");
getType(123);
getType(null);