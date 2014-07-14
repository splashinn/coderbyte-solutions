// Coderbyte solution for Noughts Determiner
// splashinn

var positions = [
  [0, 1, 2],
  [4, 5, 6],
  [8, 9, 10],
  [0, 4, 8],
  [1, 5, 9],
  [2, 6, 10],
  [0, 5, 10],
  [2, 5, 8]
];

function wins(matrix) {
  for (var i = 0; i < positions.length; i++) {
    var p = positions[i];
    if (matrix[p[0]] !== '-'
        && matrix[p[0]] === matrix[p[1]]
        && matrix[p[0]] === matrix[p[2]]){
      return true;
    }
  }
  return false;
}

function noughtsDeterminer(m) {
  for (var i = 0; i < m.length; i++) {
    if (m[i] === '-') {
      var m1 = m.slice(0, i);
      var m2 = m.slice(i + 1);
      if (wins([].concat(m1, 'O', m2)) || wins([].concat(m1, 'X', m2))) {
        return i;
      }
    }
  }
}
