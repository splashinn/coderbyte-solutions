// Coderbyte Second Great Low solution
// (C) 2014 splashinn

function SecondGreatLow(arr) {
  var arrSorted = arr.sort(function(a, b) {
    return a < b ? -1 : 1
      });
  if (arrSorted.length > 3) {
    return arrSorted[1] + " " + arrSorted[arrSorted.length - 2];
  } else {
    return arrSorted[0] + " " + arrSorted[1];
  }
}
