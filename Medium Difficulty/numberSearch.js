// coderbyte solution for number search
// splashinn

function numberSearch(str) { 
  var sum=0;
  var lets=0;
  for(var i=0;i<str.length;i++) {
    var c = str.charCodeAt(i);
    if((c >= 65 && c <= 90) || (c >= 97 && c <= 122))
      lets++;
    if(c>=48 && c<=57)
      sum += c - 48;
  }
  return Math.round(sum/lets);
}
