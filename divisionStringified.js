// Coderbyte solution for Division Stringified
// (C) 2014 splashinn

function DivisionStringified(num1,num2) {

  // code goes here
  return (Math.round(num1 / num2) + '').split('')
    .map(function(d, i, a){return i != 0 && (a.length - i) % 3 == 0 ? ',' + d : d;})
    .join('');

}
