// coderbyte solution for fibonacci checker
// splashinn

function FibonacciChecker(num) {
  if (num == 0) {
    return 'yes';
  }
  var lastNumber = 0;
  var currentNumber = 1;
  while (currentNumber <= num) {
    var nextNumber = lastNumber + currentNumber;
    if (nextNumber == num) {
      return 'yes';
    }
    lastNumber = currentNumber;
    currentNumber = nextNumber;
  }
  return 'no';
}
