// Coderbyte solution for Consecutive
// splashinn

function Consecutive(arr) {
  arr.sort(function(a,b) {
    return a-b;
  });
  return arr[arr.length - 1] - arr[0] + 1 - arr.length;
}
