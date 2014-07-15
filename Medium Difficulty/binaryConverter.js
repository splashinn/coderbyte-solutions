// coderbyte solution for binary converter
// splashinn

function BinaryConverter(str){
	result = 0;
	for (var i = str.length -1; i >= 0; i--){
		result += str[i] * Math.pow(2,str.length - 1 - i)
	}
	return result;
}
