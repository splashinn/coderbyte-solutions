// Coderbyte Letter Capitalize solution
// (C) 2014 splashinn

function LetterCapitalize(str) {

  // code goes here
  return str.replace(/(^|\s)[a-z]/gi, function (m) {
    return m.toUpperCase();
  });

}
