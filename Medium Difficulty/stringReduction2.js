// coderbyte solution for string reduction
// splashinn

function reduce(str){
  str = str.replace(/ab/, "c")
  .replace(/ba/, "c")
  .replace(/ac/, "b")
  .replace(/ca/, "b")
  .replace(/bc/, "a")
  .replace(/cb/, "a");
  return str;
}

function irreducible(str) {
  var str = str.split("");
  for (var i = 1; i < str.length; i++) {
    if (str[i] != str[i-1]) return false;
  }
  return true;
}

function StringReduction(str) {
  do {
    str = reduce(str);
  } while (str != reduce(str));

  return str.length;

}
