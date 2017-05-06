//[COMMENTS]
/*
Instructions
Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12

testEqual(10) should return "Not Equal"
testEqual(12) should return "Equal"
testEqual("12") should return "Equal"
You should use the == operator
*/
//[COMMENTS]

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
