// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// my solution

function removeChar(str) {
  return str.slice(1, -1);
 };


removeChar2 = str => str.slice(1, -1)

console.log(removeChar2("sup party people"));

// others on codewars

