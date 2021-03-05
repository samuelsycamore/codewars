// Write a function called repeat_str which repeats the given string src exactly count times.

// repeatStr(6, "I") // "IIIIII"

// my solution

function repeatStr (string, times) {
  if (times > 0) {    
    return string.repeat(times);
  } else {
      return "";
  }
}

console.log(repeatStr("sup", 6))



// others on codewars
