// Complete the solution so that it reverses the string passed into it.
// 'world'  ->  'dlrow'

function reverseString(str){
  return str.split("").reverse().join("");
}

console.log(reverseString("will this work even if I use spaces and 3984729"));