//[COMMENTS]
/*
Instructions
Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".

You should use the || operator once
You should only have one if statement
testLogicalOr(0) should return "Outside"
testLogicalOr(9) should return "Outside"
testLogicalOr(10) should return "Inside"
testLogicalOr(15) should return "Inside"
testLogicalOr(19) should return "Inside"
testLogicalOr(20) should return "Inside"
testLogicalOr(21) should return "Outside"
testLogicalOr(25) should return "Outside"
*/
//[COMMENTS]


function testLogicalOr(val) {
  // Only change code below this line
  //Original commented code
  // if (val) {
  //   return "Outside";
  // }

  // if (val) {
  //   return "Outside";
  // }

  if (val < 10 || val > 20 ) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
