// coderbyte solution for multiple brackets
// splashinn

function MultipleBrackets(str) {
  var stack = [];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[') {
      stack.push(str[i]);
      count++;
    } else if (str[i] === ')' || str[i] === ']') {
      if ((str[i] === ')' && stack[stack.length - 1] === '(') ||
          (str[i] === ']' && stack[stack.length - 1] === '[')) {
        stack.pop();
      } else {
        return '0';
      }
    }
  }
  return stack.length === 0 ? '1 ' + count : '0';
}
