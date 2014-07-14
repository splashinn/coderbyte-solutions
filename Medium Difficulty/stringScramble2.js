// Coderbyte solution for String Scramble
// (C) 2014 splashinn

function StringScramble(str1, str2) {
  for (var i = 0; i < str2.length; i++) {
    var l1 = (str1.match(new RegExp(str2[i], 'g')) || []).length;
    var l2 = (str2.match(new RegExp(str2[i], 'g')) || []).length;
    if (l1 < l2) {
      return false;
    }
  }
  return true;
}
