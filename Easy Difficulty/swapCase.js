// Coderbyte solution for Swap Case
// (C) 2014 splashinn

function SwapCase(str) {
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charCodeAt() < 97 ? arr[i].toLowerCase() : arr[i].toUpperCase();
  }
  return arr.join('');
}
