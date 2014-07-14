// Coderbyte solution for Arith Geo II
// (C) splashinn

function ArithGeo(arr) {
  if (arr.length < 3) {
    return true;
  }
  var r = arr[1] - arr[0];
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== r) {
      break;
    }
  }
  if (i === arr.length) {
    return 'Arithmetic';
  }
  var q = arr[1] / arr[0];
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== q) {
      break;
    }
  }
  if (i === arr.length) {
    return 'Geometric';
  }
  return -1;
}
