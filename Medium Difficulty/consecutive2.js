// Coderbyte solution for Consecutive
// splashinn

function Consecutive(arr) {

  var arr = arr.sort(function (a, b) {return a - b;});
  var fill = 0;
  var next = 0;
  for (var i = arr[0]; i <= arr[arr.length -1]; i++) {
    if (i == arr[next]){
      next++;
    } else {
      fill++;
    }
  }
  return fill;
}
