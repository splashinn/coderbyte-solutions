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
