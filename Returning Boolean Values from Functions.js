//[COMMENTS]
/*
A common anti-pattern is to use an if/else statement to do a comparison and then return true/false:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Since === returns true or false, we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}
Instructions
Fix the function isLess to remove the if/else statements.

isLess(10,15) should return true
isLess(15,10) should return false
You should not use any if or else statements
*/
//[COMMENTS]

function isLess(a, b) {
  // Fix this code
  //Original piece of code that was modified
  // if (a < b) {
  //   return true;
  // } else {
  //   return false;
  // }
  
  return a < b;
}

// Change these values to test
isLess(10, 15);
