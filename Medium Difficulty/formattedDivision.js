// coderbyte solution for formatted division
// splashinn

function DivisionStringified(num1, num2) {
  var div = num1 / num2;
  div = ((Math.round(div * 10000) / 10000) + '').split('.');
  var int = div[0];
  var dec = div[1] || '';
  var r = int.length % 3;
  return int.slice(0, r) + int.slice(r).replace(/.{3}/g, function (m) {
    return ',' + m;
  }) + '.' + dec + '0000'.slice(dec.length, 4);
}
