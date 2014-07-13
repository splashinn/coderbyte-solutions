// Coderybyte solution for Array Addition 1
// (C) 2014 splashinn

function ArrayAdditionI(arr) {
  if (arr.length <= 1) {
    return false;
  } else {
    var max = Math.max.apply(null, arr),
        remaining = arr.filter(function (val) {
          return val !== max;
        });

    function addToNum(totalSoFar, remainingArray, max) {
      if (totalSoFar === max) {
        return true;
      } else if (totalSoFar > max) {
        return false;
      } else if (remainingArray.length === 0) {
        return false;
      } else {
        for (var i = 0; i < remainingArray.length; i += 1) {
          if (addToNum(totalSoFar + remainingArray[i], remainingArray.slice(0, i).concat(remainingArray.slice(i + 1)), max)) {
            return true;
          }
        }
        return false;
      }
    };

    return addToNum(0, remaining, max);
  }
};
