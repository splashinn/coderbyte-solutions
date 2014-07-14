// Coderbyte solution for Prime Mover
// (C) 2014 splashinn

function PrimeMover(num) {

  var i = 1, count = 0;

  while (num !== count) {
  	i++;
  	if (PrimeTime(i)) {
  		count++;
  	}
  }
  return i;
}


function PrimeTime(num) {

  for (var i = 2; i < num; i++) {
	if (num === (1 || 2)) {
		return true;
	} else if (num%i === 0) {
		return false;
	}
  }
  return true;
}
