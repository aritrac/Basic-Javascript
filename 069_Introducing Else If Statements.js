//[COMMENTS]
/*
Instructions
Convert the logic to use else if statements.

You should have at least two else statements
You should have at least two if statements
testElseIf(0) should return "Smaller than 5"
testElseIf(5) should return "Between 5 and 10"
testElseIf(7) should return "Between 5 and 10"
testElseIf(10) should return "Between 5 and 10"
testElseIf(12) should return "Greater than 10"
*/
//[COMMENTS]

function testElseIf(val) {
  // Initial code which was modified
  // if (val > 10) {
  //   return "Greater than 10";
  // }
  // if (val < 5) {
  //   return "Smaller than 5";
  // }
  // return "Between 5 and 10";

  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  }else{
    return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
