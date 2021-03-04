// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`


// my solution


function numberToString(num) {
  return num.toString();
}

console.log(15)

// others on codewars

function numberToString(num) {
  return String(num);
}

function numberToString(num) {
  return ''+num;
}

const numberToString = num => num.toString();