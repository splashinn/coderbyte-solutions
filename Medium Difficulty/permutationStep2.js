// coderbyte solution for permutation step
// splashinn

function permutationStep(num) { 

  var concat = function (arr) {
    var s = '';
    for (var i = 0; i < arr.length; i++) {
      s += arr[i];
    }

    return s;
  };

  var equalPerm = function (a, b) {
    a = (a + '').split('');
    b = (b + '').split('');
    a.sort();
    b.sort();
    return concat(a) == concat(b);
  };

  var f = (num + '').split('');
  f.sort(function (a, b) { return a < b; });

  if (concat(f) == num) {
    return -1;
  }

  for (var i = num + 1; ; i++) {
    if (equalPerm(num, i)) {
      return i;
    }
  }
  return equalPerm(123, 321);
}
