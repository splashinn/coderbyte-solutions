// lettercapitalize.js
// (C) 2014 splashinn

function letterCapitalize(str) {
	var words = str.split("");
	for (var i = 0; i <words.length; i++) {
		var word = words[i].split("");
		word[0] = word[0].toUpperCase();
		words[i] = word.join("");
	}
	return words.join(" ");
};

console.log(letterCapitalize());