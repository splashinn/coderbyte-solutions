// Coderbyte solution Array Addition I (second example)
// (C) 2014 splashinn

function ArrayAdditionI(arr) {
	var arrSort = arr.sort(function(a,b){return a-b});
		//sorts all numbers in the array from smallest to largest
	var popSort = arrSort.pop();
		//pops out the last number, realized that there could possibly be duplicate numbers

	var arrNotGreatest = function(arr) {
		return arr != popSort;
	}

	var filter = arr.filter(arrNotGreatest);
		//created an array that does not contain all occurrences of the largest number
		//and named this array under the variable filter

    var sumArr = filter.reduce(function(a,b){return a+b});
    	//added up all the elements in this array

    return sumArr == popSort;
    	//compared the sum to the highest number
};
