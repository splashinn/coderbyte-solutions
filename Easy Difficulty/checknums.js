// Coderbyte Check Nums solution
// (C) 2014 splashinn

function CheckNums(num1, num2) {
  if (num2 > num1) {
    return true;
  } else if (num2 === num1) {
    return "-1";
  } else {
    return false;
  }
}
