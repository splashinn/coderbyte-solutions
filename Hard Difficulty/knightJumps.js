// Coderbyte solution for Knight Jumps
// splashinn

function knightJumps(str) {
  var str = str.match(/\w/g);
  var x = parseInt(str[0]);
  var y = parseInt(str[1]);

  var count = 0;
  if (x + 1 <= 8 && y + 2 <= 8) count++;
  if (x + 2 <= 8 && y + 1 <= 8) count++;
  if (x + 2 <= 8 && y - 1 >= 1) count++;
  if (x + 1 <= 8 && y - 2 >= 1) count++;
  if (x - 1 >= 1 && y - 2 >= 1) count++;
  if (x - 2 >= 1 && y - 1 >= 1) count++;
  if (x - 2 >= 1 && y + 1 <= 8) count++;
  if (x - 1 >= 1 && y + 2 <= 8) count++;

  return count;
}
