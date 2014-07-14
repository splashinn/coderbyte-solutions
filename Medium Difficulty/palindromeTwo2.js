// Coderbyte solution for Palindrome II
// (C) 2014 splashinn

function PalindromeTwo(str) {
var regExp = /[A-Z]/gi;
var strFront = str.match(regExp).join("").toLocaleLowerCase();
var strReverse = str.match(regExp).reverse().join("").toLocaleLowerCase();
  if (strFront == strReverse) {
   return true;
  } else {
  return false;
  }
}
