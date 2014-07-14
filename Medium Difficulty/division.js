// Coderbyte solution for Division
// (C) 2014 splashinn

function Division(num1, num2) {
  if (num1 > num2) {
    var big = num1;
    var small = num2;
  } else {
    var big = num2;
    var small = num1;
  }
  var max = 1;
  for (var i = 1; i < big; i ++) {
    if (Math.round(big/i) == (big/i)) {
      if (Math.round(small/i) == (small/i)) {
        max = i;
      }
    }
  }
  return max;
}
