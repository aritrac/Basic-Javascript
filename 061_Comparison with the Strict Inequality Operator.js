//[COMMENTS]
/*
The strict inequality operator (!==) is the opposite of the strict equality operator. It means "Strictly Not Equal" and 
returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

Examples

3 !== 3   // false
3 !== '3' // true
4 !== 3   // true

Instructions
Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17
*/
//[COMMENTS]

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
