var GetType=function (variable) {
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

GetType("123");
GetType(123);
GetType(null);