// Coderbyte solution for Third Greatest
// (C) 2014 splashinn

function ThirdGreatest(arr) {
  arr.sort(function (a, b) {
    if (a.length === b.length) {
      if (a === b) {
        return 0;
      }
      return a < b ? -1 : 1;
    }
    return b.length - a.length;
  });
  return arr[2];
}
