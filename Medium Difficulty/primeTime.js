// Coderbyte solution for Prime Time
// (C) 2014 splashinn

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
