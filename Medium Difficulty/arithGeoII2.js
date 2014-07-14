// Coderbyte solution for Arith Geo II
// (C) 2014 splashinn

function ArithGeoII(arr) { 
  var arith=true;
  var geo=true;
  var dif = arr[1]-arr[0];
  var div = (arr[2]-arr[1])/(arr[1]-arr[0])
  for (var i=0;i<arr.length-1;i++) {
    var nDif = arr[i+1]-arr[i];
    if (dif!=nDif) {
      arith = false;
    }
  }
  for (var i=0;i<arr.length-2;i++) {
    var nDiv = (arr[i+2]-arr[i+1])/(arr[i+1]-arr[i]);
    if (div!=nDiv) {
      geo = false;
    }
  }
  if (geo==false && arith==false) {
    return -1;
  }
  if (arith==false) {
    return "Geometric"
  }
  if (arith==true) {
    return "Arithmetic"
  }
}
