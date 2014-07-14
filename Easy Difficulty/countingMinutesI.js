// Coderbyte solution for Counting Minutes I
// (C) 2014 splashinn

function CountingMinutesI(str) {
  var m = str.match(/\d+|am|pm/gi);

  var h0 = parseInt(m[0]);
  var m0 = parseInt(m[1]);
  if (h0 !== 12 && m[2] === 'am') {
    h0 += 12;
  } else if (h0 === 12 && m[2] === 'pm') {
    h0 = 0;
  }

  var h1 = parseInt(m[3]);
  var m1 = parseInt(m[4]);
  if (h1 !== 12 && m[5] === 'am') {
    h1 += 12;
  } else if (h1 === 12 && m[5] === 'pm') {
    h1 = 0;
  }

  return ((h1 - h0) * 60 + m1 - m0 + 1440) % 1440;
}
