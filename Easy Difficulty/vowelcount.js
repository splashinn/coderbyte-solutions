// Coderbyte Vowel Count solution
// (C) 2014 splashinn

function VowelCount(str){
  var vowels = "";
  for (var i = 0; i < str.length; i += 1) {
    if (str[i].match(/[aeiou]/)){
      vowels += str[i];
    }
  }
  return vowels.length;
}
