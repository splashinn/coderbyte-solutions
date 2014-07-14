// Coderbyte solution for Three Five Multiples
// splashinn

function ThreeFiveMultiples(num) {
  var multiples = {};
  for (var i = 3; i < num; i += 3) {
    multiples[i] = true;
  }
  for (var i = 5; i < num; i += 5) {
    multiples[i] = true;
  }
  var sum = 0;
  for (var i in multiples) {
    sum += multiples[i] ? parseInt(i) : 0;
  }
  return sum;
}
