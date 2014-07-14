// Coderbyte solution Simple Mode
// (C) 2014 splashinn

function SimpleMode(arr) {
  var mode={}, max=1, pos=arr.length, maxi=-1;
  for (var i=0;i<arr.length;i++)
  {
    if (mode["k"+arr[i]]) mode["k"+arr[i]].value++;
    else mode["k"+arr[i]]={number: arr[i], value:1, order: i};
    if (mode["k"+arr[i]].value>max) max=mode["k"+arr[i]].value
  }
  if (max==1) return -1;
  for (var k in mode)
  {
    if (mode[k].value==max && mode[k].order<pos)
    {
      maxi=mode[k].number;
      pos=mode[k].order;
    }
  }
  return maxi;
}
