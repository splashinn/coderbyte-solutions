// Coderbyte solution for Number Addition
// (C) 2014 splashinn

function NumberAddition(str) {

  var nums = str.match(/\d+/gi);

  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i] * 1;
  }
  // code goes here
  return sum;

}
