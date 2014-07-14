// coderbyte solution for caesar cipher
// splashinn

function CaesarCipher(str, num) {
  return str.replace(/./g, function (l) {
    var c = l.charCodeAt();
    if (c >= 65 && c <= 90) {
      c += num;
      return String.fromCharCode(c > 90 ? 65 + c - 91 : c);
    }
    if (c >= 97 && c <= 122) {
      c += num;
      return String.fromCharCode(c > 122 ? 97 + c - 123 : c);
    }
    return l;
  });

}
