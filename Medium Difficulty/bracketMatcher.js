// coderbyte solution for bracket matcher
// splashinn

function toBracket(str) {
   var result = new Array();
 	for (var i = 0; i < str.length; i++) {
 		if ("()".indexOf(str[i]) !== -1) {
 			result.push(str[i]);
 		}
 	}
 	return result.join("");
 }



function bracketMatcher(str) {
 	var str = toBracket(str);
  var openBrackets = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openBrackets = openBrackets + 1;
    } else if (openBrackets === 0) {
      return 0;
    } else {
      openBrackets = openBrackets - 1;
    }
  }
  if (openBrackets !== 0) {
    return 0;
  } else {
    return 1;
  }
}
