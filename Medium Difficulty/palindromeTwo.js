// Coderbyte solution for Palindrome II
// (C) 2014 splashinn

function remove(str) {
  var str = str.toLowerCase();
  var noSymbols = new Array(str.length);
  for (var i = 0; i < str.length; i++) {
    if ("abcdefghijklmnopqrstuvwxyz".indexOf(str[i]) !== -1) {
      noSymbols[i];
    } else {
      noSymbols[i] == undefined;
    }
   }
   return noSymbols.join("");
}

function reverse(str) {
  var result = new Array(str.length);
  for (var i = 0; i < str.length; i++) {
    result[i] = str[str.length - 1 - i];
  }
  return result.join("");
}

function palindromeTwo(str) {
  var str1 = remove(str);
  var str2 = reverse(str1);
  if (str1 === str2) {
    return "true";
  } else {
    return "false";
  }
}
