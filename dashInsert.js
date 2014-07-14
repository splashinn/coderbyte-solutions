// Coderbyte solution for Dash Insert
// (C) 2014 splashinn

function DashInsert(num) {
  var arr = (num + '').split('');
  var output = [];
  for (var i = 0; i < arr.length - 1; i++) {
    output.push(arr[i]);
    if (/[13579]/g.test(arr[i]) && /[13579]/g.test(arr[i + 1])) {
      output.push('-');
    }
  }
  output.push(arr[arr.length - 1]);
  return output.join('');
}
