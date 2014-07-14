// Coderbyte Simple Symbols solution
// (C) 2014 splashinn

function SimpleSymbols(str){
var results = [];
  for(var i = 0; i < str.length; i +=1){
  if (str[i].match(/[a-z,A-Z]/)) {
    if (str[i + 1] === "+" && str[i - 1] === "+"){
      results.push('true');
    }
    else {results.push('false');}
    }
  }
  var resultsStr = results.join(" ");
  if (resultsStr.match(/false/)) {return "false";}
  else {return "true";}
  }
