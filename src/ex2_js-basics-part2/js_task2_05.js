var getMax=function(arr){
	var max=arr[0]
	for (var i=1; i<arr.length; i++)
		if (arr[i-1]<arr[i])
			max=arr[i];
	console.log("Максимальное значение: "+max);
}

getMax([9,3,45]);