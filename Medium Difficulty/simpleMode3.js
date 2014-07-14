// coderbyte solution for simple mode
// splashinn

function countFrequency(arr) {
  var obj = {};
	for (var i = 0; i < arr.length; i++) {
		var element = arr[i];
		var value = obj[element];
		if (value === undefined) {
			obj[element] = 1;
		} else {
			obj[element] = value + 1;
		}
	}
	return obj;
}

function finalMaximum(obj) {
	var max = 0;
	var mode = undefined;
	for (var key in obj) {
		var value = obj[key];
		if (value > max) {
			max = value;
			mode = key;
		}
	}
	return parseInt(mode);
}

function SimpleMode(arr) {
	var obj = countFrequency(arr);
	var mode = finalMaximum(obj);
	return mode;
}
