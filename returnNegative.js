// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.



function reverseString(str){
  return str.split("").reverse().join("");
}

console.log(reverseString("will this work even if I use spaces and 3984729"));