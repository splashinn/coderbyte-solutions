// Coderbyte solution 3 to Array Addition I
// (C) 2014 splashinn

function getCombinations(chars) {
  var result = [];
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix.concat(chars[i]));
      f(prefix.concat(chars[i]), chars.slice(i + 1));
    }
  }
  f([], chars);
  return result;
}

function sum(arr) {
  var v = 0;
  for (var i = 0; i < arr.length; i++) {
    v += arr[i];
  }
  return v;
}

function ArrayAdditionI(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var largest = arr.pop();
  var c = getCombinations(arr);
  for (var i = 0; i < c.length; i++) {
    if (sum(c[i]) === largest) {
      return true;
    }
  }
  return false;
}
