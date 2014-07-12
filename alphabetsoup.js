// Coderbyte Alphabet Soup solution
// (C) 2014 splashinn

function AlphabetSoup(str) {
  var strSplit = str.split("");
  var lettersSorted = strSplit.sort(function(a, b) {
    return a < b ? - 1 : 1;
  });
  return lettersSorted.join("");
}
