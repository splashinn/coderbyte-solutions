// Coderbyte Ex Oh solution
// (C) 2014 splashinn

function ExOh(str) {
  var xes = "";
  var os = "";
  var strChars = str.split("");
  for (var i = 0; i < strChars.length; i += 1) {
    strChars[i] === "x" ? xes += strChars[i] : os += strChars[i];
  }
  return xes.length === os.length ? "true" : "false";
}
