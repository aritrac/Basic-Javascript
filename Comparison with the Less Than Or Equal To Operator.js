//[COMMENTS]
/*
Instructions
Add the less than or equal to operator to the indicated lines so that the return statements make sense.

testLessOrEqual(0) should return "Smaller Than or Equal to 12"
testLessOrEqual(11) should return "Smaller Than or Equal to 12"
testLessOrEqual(12) should return "Smaller Than or Equal to 12"
testLessOrEqual(23) should return "Smaller Than or Equal to 24"
testLessOrEqual(24) should return "Smaller Than or Equal to 24"
testLessOrEqual(25) should return "25 or More"
testLessOrEqual(55) should return "25 or More"
You should use the <= operator at least twice
*/
//[COMMENTS]

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

// Change this value to test
testLessOrEqual(10);
