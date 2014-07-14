// Coderbyte solution for Letter Count I
// (C) 2014 splashinn

function LetterCountI(str) {
  var words = str.split(' ');
  var maxCount = 0;
  for(var i=0;i<words.length;i++){
    var hi = words[i].match(/([a-z])(?=.*\1)/ig);
    if(hi != null){
      if(hi.length>maxCount){
        maxCount = hi.length;
        var maxWord = words[i];
      }
    }
  }
  return maxWord || -1;
}
