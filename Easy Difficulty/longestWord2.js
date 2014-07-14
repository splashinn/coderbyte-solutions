// coderbyte solution for longest word
// splashinn

function LongestWord(sen) {

  var regExp = /\W/gi;
    sen = sen.replace(regExp, " ").split(" ");
    var array = [];
    var i = 0;
    while (i < sen.length) {
       array.push(sen[i].length);
       i++;
    }
    array.sort(function(a,b) {return a-b});
    var longest = array.pop();

    var j = 0;
    while (j <= array.length) {

        if(sen[j].length == longest) {
           return sen[j];
        }
        j++;
    }

}
