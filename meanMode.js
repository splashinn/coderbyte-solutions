// Coderbyte solution for Mean Mode
// (C) 2014 splashinn

function MeanMode(arr) {
  var mode = null;
  var freq = 0;
  var mean = 0;
  for (var i = 0; i < arr.length; i++) {
    var f = arr.lastIndexOf(arr[i]) - i + 1;
    if (f > freq) {
      mode = arr[i];
      freq = f;
    }
    mean += arr[i];
  }
  mean /= arr.length;
  return mode === mean ? 1 : 0;
}
