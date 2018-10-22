var IsElementsSame=function(arr){
	var i;
	var result=true;
	for (i=1; i<arr.length; i++)
		if (arr[i-1]!==arr[i])
			result=false;
	console.log(result);	
}

IsElementsSame([1,1,1]);
IsElementsSame([0,0,null]);