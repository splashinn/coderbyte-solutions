// Coderbyte AB Check solution
// (C) 2014 splashinn

function abcheck(str) {
  var results = [];
  for (var i = 0; i < str.length; i += 1) {
    if (str[i] === "a") {
      str[i + 4] === "b" ? results.push('true'):results.push('false');
    }
  }
  return results.toString().match(/t/) ? true : false;
}
