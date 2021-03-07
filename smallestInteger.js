// Given an array of integers your solution should find the smallest integer.

// For example:

  //  Given [34, 15, 88, 2] your solution will return 2
  //  Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// my solution

 function findSmallestInt(args) {
    let smallestBoy = args[0]
    for (let i=0; i<args.length; i++)
      if(args[i] <= smallestBoy) {
        smallestBoy = args[i]
      }
      return smallestBoy
  }

  console.log(findSmallestInt([12, 23958, 29,4, 2, 123]))

// others on codewars

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}