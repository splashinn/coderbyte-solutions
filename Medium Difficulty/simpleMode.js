// Coderbyte solution for Simple Mode
// 2014 splashinn

function SimpleMode(arr) {

  var mc = 0,
      m = -1;

  for (var i = 0; i < arr.length; i++) {
    var c = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        c++;
      }
    }

    if (c > 1 && c > mc) {
      mc = c;
      m = arr[i];
    }
  }
