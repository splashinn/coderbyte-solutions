// Coderbyte solution for Array Addition
// (C) 2014 splashinn

function makeAarr(arr) {
  var aarr = new Array();
	for (var i = 0; i < arr.length; i++) {
		var result = new Array();
		result.push(arr[i]);
		aarr.push(result);
	}
	return aarr;
}




function largerArray(result, arr) {
		var lastResult = new Array();
	for (var i = 0; i < result.length; i++) {
		var newAr = new Array();
		for (var k = 0; k < result[i].length; k++) {
			newAr.push(result[i][k]);
		}
		for (var j = 0; j < arr.length; j++) {
			var lastArr = new Array();
			for (var l = 0; l < newAr.length; l++) {
				lastArr.push(newAr[l]);
			}
			if (arr[j] > lastArr[lastArr.length - 1]) {
				lastArr.push(arr[j]);
				lastResult.push(lastArr);
			}

		}
	}
	return lastResult;
}





function arrayAddition(arr) {
	var arr = arr.sort(function(a,b){return a-b});
	var theBiggest = parseInt(arr[arr.length - 1]);
	arr.pop();

	var aarr = makeAarr(arr);
	var result = new Array();

	for (var i = 0; i < aarr.length; i++) {
		var newAr = new Array();
		for (var k = 0; k < aarr[i].length; k++) {
			newAr.push(aarr[i][k]);
		}
		for (var j = 0; j < arr.length; j++) {
			var lastArr = new Array();
			for (var l = 0; l < newAr.length; l++) {
				lastArr.push(newAr[l]);
			}
			if (arr[j] > lastArr[lastArr.length - 1]) {
				lastArr.push(arr[j]);
				result.push(lastArr);
			}

		}
	}
	for (var n = 0; n < result.length; n++) {
		var suma = 0;
		for (var p = 0; p < result[n].length; p++) {
			suma = suma + result[n][p];
		}
		if (suma === theBiggest) {
			return "true";
		}
	}

	for (var m = 0; m < arr.length - 2; m++) {
		var last = largerArray(result, arr);
		result = last;
		for (var n = 0; n < result.length; n++) {
			var suma = 0;
			for (var p = 0; p < result[n].length; p++) {
				suma = suma + result[n][p];
			}
			if (suma === theBiggest) {
				return "true";
			}
		}

	}
	return "false";
}
