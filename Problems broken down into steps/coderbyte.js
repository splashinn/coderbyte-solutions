// coderbyte solutions
// splashinn

/* Breakdown of First reverse:
// 1. split the user inputted string based on the characters. this creates an array of the individual characters in string form. this is done using split.
// 2. reverse the elements in the array using reverse.
// 3. join the elements in the array using join. join is based on character.
// 4. return the above.
*/

function FirstReverse(str) {
  return str.split('').reverse().join('');
}


/* Breakdown of First Factorial:
// The function will return 1 when num is less than or equal to 1.
// If num is not equal to or greater than 1, the num will be multiplied by the function itself.
// When the function is called within itself, we call it with (num - 1) which decreases num each time.
// This is how you get the factorial of a number. For example, 5 ->(num - 1) 4 ->(num - 1) 3 ->(num - 1) 2 ->(num === 1) 1 === 120
*/

function FirstFactorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * FirstFactorial(num - 1);
}

// Steps located to the right of code.

function LongestWord(sen) {
  var words = sen.split(' ');                             // Split the user-inputted sentence into words
  var counter = 0;                                        // Create a counter to keep track of the # of letters in a word
  var poleposcount = 0;                                   // Create a pole position counter to keep track of the # of letters the longest word has
  var poleposword = '';                                   // Create an empty string to store the longest word
  for (var i = 0; i < words.length; i++){                 // Create a FOR LOOP to run thru each word in the sentence. FOR EACH word...
    var sideword = words[i];                                // Store the current word in a side variable for later use
    for (var j = 0; j < sideword.length; j++){              // Create another FOR LOOP to run thru each character in the current side word. FOR EACH character...
      if (sideword[j] >= 'a' && sideword[j] <= 'z'){          // So long as the character is a letter...
        counter += 1;                                           // -> Add 1 to the counter (this counts the # of letters in the current side word)
      }
      if (counter > poleposcount){                            // After running thru each letter, if the counter (# of letters in the current word) is greater than the pole position counter (# of letters in the longest word)...
        poleposcount = counter;                                 // -> Assign the counter as the new pole position counter (the current value for the counter becomes the value of the pole position counter)
        poleposword = sideword;                                 // -> Assign the current side word as the pole position word aka the current word becomes the current longest word (so far at least)
      }
    }
    counter = 0;                                            // Reset the counter at the end of the 1st FOR-LOOP
  }
  return poleposword;                                     // Return the longest word
}
