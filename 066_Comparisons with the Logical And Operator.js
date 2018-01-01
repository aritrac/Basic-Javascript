//[COMMENTS]
/*
Instructions
Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and 
greater than or equal to 25. Otherwise, will return "No".

You should use the && operator once
You should only have one if statement
testLogicalAnd(0) should return "No"
testLogicalAnd(24) should return "No"
testLogicalAnd(25) should return "Yes"
testLogicalAnd(30) should return "Yes"
testLogicalAnd(50) should return "Yes"
testLogicalAnd(51) should return "No"
testLogicalAnd(75) should return "No"
testLogicalAnd(80) should return "No"
*/
//[COMMENTS]

function testLogicalAnd(val) {
  // Only change code below this line
  // Original code
  //if (val) {
  //  if (val) {
  //    return "Yes";
  //  }
  //}
  
  if(val <= 50 && val >= 25){
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
