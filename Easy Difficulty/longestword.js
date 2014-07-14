// Coderbyte Longest Word solution
// (C) 2014 splashinn

function LongestWord(sen) {
    var sentence = sen.split(" ")
                    .sort(function(a, b) {
                        return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length;
    });
    return sentence.shift();
}
