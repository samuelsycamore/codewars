// Simple, remove the spaces from the string, then return the resultant string.

// my solution

function noSpace(x){
  return x.replace(/\s+/g, '');
}

console.log(noSpace2('8 j 8   mBliB8g  imjB8B8  jl  B'))

// others on codewars

function noSpace2(x){return x.split(' ').join('')}