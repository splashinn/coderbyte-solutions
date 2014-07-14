// coderbyte solution for swap II
// splashinn

function IsLetter(char) {
  return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char) !== -1;
}

function IsDigit(char) {
	return "0123456789".indexOf(char) !== -1;
}

function splitToArray(str) {
	if (str.length === 0) {
		return [];
	}
	var result = new Array();
	var inDigits = IsDigit(str[0]);
	var begin = 0;
	for (var i = 1; i < str.length; i++) {
		var digit = IsDigit(str[i]);
		if (digit !== inDigits) {
			result.push(str.slice(begin, i));
			begin = i;
			inDigits = digit;
		}
	}
	result.push(str.slice(begin, str.length));
	return result;
}

function isNumber(str) {
	for (var i = 0; i < str.length; i++) {
		if (IsDigit(str[i]) !== true) {
			return false;
		}
	}
	return true;
}

function isWord(str) {
	for (var i = 0; i < str.length; i++) {
		if (IsLetter(str[i]) !== true) {
			return false;
		}
	}
	return true;
}


function SwapII(str) {
	var result = new Array(str.length);
	for (var i = 0; i < str.length; i++) {
		if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(str[i]) !== -1) {
			if (str[i].toUpperCase() !== str[i]) {
				result[i] = str[i].toUpperCase();
			} else {
				result[i] = str[i].toLowerCase();
			}
		} else {
			result[i] = str[i];
		}
	}

	var splitted = splitToArray(result.join(""));
	for (var i = 1; i + 1 < splitted.length; i++) {
		if (isWord(splitted[i]) && isNumber(splitted[i - 1]) && isNumber(splitted[i + 1])) {
			var temp = splitted[i - 1];
			splitted[i - 1] = splitted[i + 1];
			splitted[i + 1] = temp;
		}
	}

	return splitted.join("");
}
