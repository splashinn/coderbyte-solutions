// Coderbyte solution for Run Length
// (C) 2014 splashinn

function RunLength(str) {
  var result = '';
  var count = 1;

  for (i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += count + str[i - 1];
      count = 1;
    }
  }
  result += count + str[i - 1];
  return result;
}
