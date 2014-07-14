// coderbyte solution for dash insert II
// splashinn

function dashInsertII(num) {
  var str = "" + num;
	var result = new Array(str.length);
	for (var i = 0; i < str.length; i++) {
		var digit = parseInt(str[i]);
		if ((str[i + 1] !== undefined) && digit % 2 !== 0 && parseInt(str[i + 1]) % 2 !== 0) {
			result[i] = str[i] + "-";
		} else if ((str[i + 1] !== undefined) && digit % 2 === 0 && parseInt(str[i + 1]) % 2 === 0 &&
				digit !== 0 && parseInt(str[i + 1]) !== 0) {
			result[i] = str[i] + "*";
		} else {
			result[i] = str[i];
		}
	}
	return result.join("");
}
