function BracketMatcher(str) {

str.split("");
  var total1 = [], total2 = [], total3 = [], total4 = [];
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "(") {
      total1.push(i);
    }
    if(str[i] === ")") {
      total2.push(i);
    }
    if(str[i] === "]") {
       total3.push(i);
    }

    if(str[i] === "[") {
      total4.push(i);

    }
  }
  var num = total1.length +total3.length;
  if(total1.length != total2.length || total3.length != total4.length ) {
      return 0;
  }
  else {
      return 1;
  }

}
