// coderbyte solution for multiple brackets
// splashinn

function MultipleBrackets(str) {
  var openP = 0;
  var closeP = 0;
  var openB = 0;
  var closeB = 0;
  var counter = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] == '('){
      openP += 1;
      counter += 1;
    }
    if (str[i] == ')'){
      closeP += 1;
    }
    if (str[i] == '['){
      openB += 1;
      counter += 1;
    }
    if (str[i] == ']'){
      closeB += 1;
    }
  }
  if (openP == closeP && openB == closeB){
    return 1 + ' ' + counter;
  } else {
    return 0;
  }
}}
