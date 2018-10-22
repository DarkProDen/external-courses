var GetEvenAndOdd=function(arr){
	var i;
	var even=0;
	var odd=0;
	var zero=0;
	for (i=0; i<arr.length; i++){
		if (arr[i]%2===1)
			odd++;
		else if (arr[i]===0)
			zero++;
		else if (typeof arr[i]==="number")
			even++;
	}	
	console.log("четных: "+even+"; нечетных: "+odd+"; нуль:"+zero);
}

GetEvenAndOdd([1,2,3,0]);