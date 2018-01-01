//[COMMENTS]
/*
Instructions
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

testGreaterOrEqual(0) should return "9 or Under"
testGreaterOrEqual(9) should return "9 or Under"
testGreaterOrEqual(10) should return "10 or Over"
testGreaterOrEqual(11) should return "10 or Over"
testGreaterOrEqual(19) should return "10 or Over"
testGreaterOrEqual(100) should return "20 or Over"
testGreaterOrEqual(21) should return "20 or Over"
You should use the >= operator at least twice
*/
//[COMMENTS]

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);
