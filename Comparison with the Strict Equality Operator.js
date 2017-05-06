//[COMMENTS]
/*
Strict equality (===) is the counterpart to the equality operator (==). Unlike the equality operator, 
strict equality tests both the data type and value of the compared elements.

Examples

3 === 3   // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Instructions
Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

testStrict(10) should return "Not Equal"
testStrict(7) should return "Equal"
testStrict("7") should return "Not Equal"
You should use the === operator
*/
//[COMMENTS]

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
