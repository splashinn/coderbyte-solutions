// coderbyte solution for caesar cipher
// splashinn

function caesarCipher(str, num) {
  var result = new Array(str.length);
	for (var i = 0; i < str.length; i++) {
		if ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(str[i]) !== -1) {
			var code = str[i].charCodeAt(0) + num;
			result[i] = String.fromCharCode(code);
		} else {
			result[i] = str[i];
		}
	}
	return result.join("");
}
