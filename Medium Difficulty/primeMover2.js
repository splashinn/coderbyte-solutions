// Coderbyte solution for Prime Mover
// (C) 2014 splashinn

function PrimeMover(num) {
  var primes = [];
  for(var i=2;i<10000;i++){
    for(var j=2;j<i;j++){
      if(i%j===0) j=j+10000;
    }
    if(j<10000)primes.push(i);
    if(primes.length === num) return i;
  }
}
