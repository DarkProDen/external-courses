var isElementsSame=function(arr){
	var result=true;
	var element=arr[0];
	for (var i=1; i<arr.length; i++)
		if (element!==arr[i])
		{
			result=false;
			break;
		}			
	console.log(result);
}

isElementsSame([1,1,1]);
isElementsSame([0,0,null]);