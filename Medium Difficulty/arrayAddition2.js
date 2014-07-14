// Coderbyte solution for Array Addition
// (C) 2014 splashinn

function arrayAddition(arr) {   
  arr.sort(function(a, b){return b-a});
  var max = arr.shift();

  for (var i = 0; i < Math.pow(2, arr.length); i++) {
    var flag = (i).toString(2).split('');
    var sum = 0;
    for (var j = 0; j < flag.length; j++) {
      if (flag[j] == '1') sum += arr[j];
    }
    if (sum == max) return "true";
  }
  return "false";

}
