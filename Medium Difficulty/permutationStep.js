// coderbyte solution for permutation step
// splashinn

function permutationStep(num) { 
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

  result.sort();

  for (var i = 0; i < result.length; i++){
    if (result[i] > num){
      return result[i];
    }
  }
  return -1;
}
