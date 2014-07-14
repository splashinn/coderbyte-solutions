// Coderbyte solution for Consecutive
// splashinn

function Consecutive(arr) {
  var arr = arr.sort(function (a, b) {
    return a-b;
  });
  var results = [];
  var number = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    var current = arr[i];
    var next = arr[i + 1];
    var diff = next - current;
    console.log(diff);
    var correct = diff - 1;
    results.push(correct);
  }
  for (var x = 0; x < results.length; x++) {
    number += results[x]
  }
  return number;
}
