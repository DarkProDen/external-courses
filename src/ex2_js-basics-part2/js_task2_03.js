var getEvenAndOdd=function(arr){
	var even=0;
	var odd=0;
	var zero=0;
	for (var i=0; i<arr.length; i++){
		if (arr[i]%2===1)
			odd++;
		else if (arr[i]===0)
			zero++;
		else if (typeof arr[i]==="number")
			even++;
	}	
	console.log("четных: "+even+"; нечетных: "+odd+"; нуль:"+zero);
}

getEvenAndOdd([1,2,3,0]);