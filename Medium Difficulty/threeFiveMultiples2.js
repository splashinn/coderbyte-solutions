// Coderbyte solution to Three Five Multiples
// splashinn

function ThreeFiveMultiples(num) {
  var sum=0;
  for (var i=3;i<num;i++)
  {
    if (i%3==0 || i%5==0) sum+=i;
  }
  return sum;
}
