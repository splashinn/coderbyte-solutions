// Coderbyte solution for String Scramble
// (C) 2014 splashinn

function StringScramble(str1,str2) {

  for (var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) == -1) {
      return false;
    }
  }
  return true;
}
