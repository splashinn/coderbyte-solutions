// Coderbyte solution for Division
// (C) 2014 splashinn

function Division(num1,num2) {
  var div = 1;
  for (var i = 0; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      div = i;
    }
  }
  return div;

}
