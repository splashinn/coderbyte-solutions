// coderbyte solution for prime checker
// splashinn

function isPrime(num) {
  for (var i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}
function FindAllPermutations(str, index, buffer) {
    if (typeof str == "string")
        str = str.split("");
    if (typeof index == "undefined")
        index = 0;
    if (typeof buffer == "undefined")
        buffer = [];
    if (index >= str.length)
        return buffer;
    for (var i = index; i < str.length; i++)
        buffer.push(ToggleLetters(str, index, i));
    return FindAllPermutations(str, index + 1, buffer);
}

function ToggleLetters(str, index1, index2) {
    if (index1 != index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    }
    return str.join("");
}
function PrimeChecker(num) {
  var nums = FindAllPermutations(num + '');
  for (var i = 0; i < nums.length; i++) {
    if (isPrime(parseInt(nums[i]))) {
      return 1;
    }
  }
  return 0;
}
