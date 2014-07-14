// Coderbyte solution for Letter Count
// splashinn

function getRepLetters(word) {
  var letters = {};
  for (var i = 0; i < word.length; i++) {
    if (!letters[word[i]]) {
      letters[word[i]] = 0;
    }
    letters[word[i]]++;
  }
  var count = 0;
  for (var l in letters) {
    if (letters[l] > count) {
      count = letters[l];
    }
  }
  return count;
}
function letterCount(str) {
  var words = str.match(/[^\s]+/g);
  words.sort(function (a, b) {
    var ca = getRepLetters(a);
    var cb = getRepLetters(b);
    return cb - ca;
  });
  return getRepLetters(words[0]) === 1 ? -1 : words[0];
}
