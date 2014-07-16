// coderbyte solution for string reduction
// splashinn

function StringReduction(str) {
  var lastLength;

  do {
    lastLength = str.length;
    str = str.replace(/ab|ba/, "c");
    str = str.replace(/bc|cb/, "a");
    str = str.replace(/ac|ca/, "b");
  }
  while (lastLength > str.length)
    return str.length;
}
