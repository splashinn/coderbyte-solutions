// Coderbyte Time Convert solution
// (C) 2014 splashinn

function TimeConvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  var theTime = hours + ":" + minutes;
  return theTime;
}
