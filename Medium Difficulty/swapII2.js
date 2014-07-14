// coderbyte solution for swap II
// splashinn

function swapCase(str) {
  var str = str.split("");
  str = str.map(function(char){
    var code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) return char.toUpperCase();
    if (code >= 65 && code <= 90) return char.toLowerCase();
    return char;
  });
  return str.join("");
}

function SwapII(str) {
  var str = swapCase(str);

  var prevDigit = -1;
  var prevPos = -1;
  var newStr = [];

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c >= 48 && c <= 57) {
      if (prevDigit >= 0) {
        newStr[prevPos] = str.charAt(i);
        newStr[i] = prevDigit;
        prevDigit = -1;
        prevPos = -1;
      } else {
        newStr[i] = str.charAt(i);
        prevDigit = str.charAt(i);
        prevPos = i;
      }
    } else if(c >= 97 && c <= 122 || c >= 65 && c <= 90) {
      newStr[i] = str.charAt(i);
    } else {
      newStr[i] = str.charAt(i);
      prevDigit = -1;
      prevPos = -1;
    }
  }
  return newStr.join("");
}
