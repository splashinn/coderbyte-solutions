// Coderbyte solution for Letter Count
// 2014 splashinn

function toArr(str) {
  var result = new Array(str.length);
	for (var i = 0; i < str.length; i++) {
		result[i] = str[i];
	}
	return result;
}

function splitArray(str) {
	if (str.length === 0) {
		return [];
	}
	var result = new Array();
	var first = str[0];
	var begin = 0;
	for (var i = 0; i < str.length; i++) {
		if (first !== str[i]) {
			result.push(str.slice(begin, i));
			begin = i;
			first = str[i];
		}
	}
	result.push(str.slice(begin, str.length));
	return result;
}

function runLength(str) {
	var arr = toArr(str).sort().join("");
	arr = splitToArray(arr);
	var result = new Array();
	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i].length);
	}
	return result.join("");
}

function removeSplit(str) {
	var noSymbols = [];
	for (var i = 0; i < str.length; i++) {
		if ("abcdefghijklmnopqrstuvwxyz ".indexOf(str[i].toLowerCase()) !== -1) {
			noSymbols.push(str[i]);
		}
	}
	return noSymbols.join("").split(" ");
};

function returnNum(str) {
	var max = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] > max) {
			max = str[i];
		}
	}
	return parseInt(max);
}

function letterCount(str) {
	var stringFirst = removeSplit(str);
	var str = str.toLowerCase();
	arr = removeSplit(str);
	var arr2 = new Array(arr.length);
	for (var i = 0; i < arr.length; i++) {
		arr2[i] = runLength(arr[i]);
	}
	var arr3 = new Array();
	for (var i = 0; i < arr2.length; i++) {
		arr3.push(returnNum(arr2[i]));
	}
	var finalMax = returnNum(arr3.join(""));
		if (finalMax === 1) {
			return -1;
		}
	for (var i = 0; i < arr3.length; i++) {
		if (arr3[i] === finalMax) {
			return stringFirst[i];
		}
	}
}
