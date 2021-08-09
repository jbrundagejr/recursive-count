function recursiveCount(num = 0) {
  // establish base case to exit loop and return undefined
  if(num === 10) return undefined
  // print number
  console.log(num)
  // execute function until base case is met
  recursiveCount(num + 1)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
