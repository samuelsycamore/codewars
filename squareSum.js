// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// my solution

function squareSum(numbers){
  return numbers.map(x => x*x).reduce((t, a) => t + a, 0);
}

console.log(squareSum2([0, 3, 4, 5]))

// others on codewars

function squareSum2(numbers){
  return numbers.reduce((acc,curr)=> acc + curr * curr, 0);
}
