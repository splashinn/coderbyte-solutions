// coderbyte solution for triple double
// splashinn

function numToString(num) {
  var string = "" + num;
	return string;
}

function tripleDouble(num1, num2) {
	var num1 = numToString(num1);
	var num2 = numToString(num2);
	var tripledNum = new Array();;
	for (var i = 0; i < num1.length; i++) {
		if (num1[i] === num1[i + 1] && num1[i] === num1[i + 2]) {
			tripledNum.push(parseInt(num1[i]));
		}
	}
	for (var i = 0; i < num2.length; i++) {
		if (num2[i] === num2[i + 1] && tripledNum.indexOf(parseInt(num2[i])) !== -1) {
			return 1;
		}
	}
	return 0;
}
