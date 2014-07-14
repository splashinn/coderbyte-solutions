// coderbyte solution for counting minutes
// splashinn

function lateOrNot(str) {
  for (var i = 0; i < str.length; i++) {
		if (str[i] === "p" || str[i] === "P") {
			return "p";
		} else if (str[i] === "a" || str[i] === "A") {
			return "a";
		}
	}
}




function toMinutes(time) {
	var arr = time.split(":");
	if (arr[0] === "12") {
		arr[0] = "00";
	}
	var min = parseInt(arr[1], 10);
	var hours = parseInt(arr[0], 10) * 60;
	if (lateOrNot(time) === "p") {
		hours += 12*60;
	}
	return hours + min;
}




function countingMinutes(str) {
	var array = str.split("-");
	var time1 = toMinutes(array[0]);
	var time2 = toMinutes(array[1]);
	if (time2 < time1) {
		return time2 + (24*60 - time1);
	} else {
		return time2 - time1;
	}
}
