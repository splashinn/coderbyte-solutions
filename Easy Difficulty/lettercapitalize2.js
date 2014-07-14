// Coderbyte Letter Capitalize solution
// (C) 2014 splashinn


function LetterCapitalize(str){
  var splitStr = str.split(" ");
  var newStr = [];
     for(var i = 0; i < splitStr.length; i+= 1){
       var word = splitStr[i];
       var firstLetter = word.charAt(0);
       newStr.push(firstLetter.toUpperCase() + word.slice(1,splitStr[i].length));
     }
     return newStr.join(" ");
     }
