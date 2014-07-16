// coderbyte solution for prime checker
// splashinn

function primeChecker(num) { 
  var result = [];
  var perm = function(current, set){
    if (set.length == 0){
      result.push(parseInt(current));
      return;
    }
    for (var i = 0; i < set.length; i++){
      var pivot = set[i];
      set.splice(i, 1);
      perm(current + pivot, set);
      set.splice(i, 0, pivot);
    }
  }

  perm('', num.toString().split(''));

  var primeTime = function(numero){
    if (numero == 1){
    return false;
    } else{
    for (var j = 2; j < numero/2; j++){
      if (numero % 2 === 0){
        return false;
      }
    }
    return true;
  }
  }

  for (var k = 0; k < result.length; k++){
    if (primeTime(result[k]) === true){
      return 1;
    }
  }
  return 0;

}
