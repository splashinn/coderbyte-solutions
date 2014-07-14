// Coderbyte Palindrome solution
// (C) 2014 splashinn

function Palindrome(str){
     var backwards = "";
     for (var i = (str.length - 1); i > -1 ; i -= 1) {
       if (str[i] != " ") {
        backwards += str[i];
    }
  }
  var newStr = str.replace(/\s+/g, "");
  return newStr === backwards ? true : false;
}
