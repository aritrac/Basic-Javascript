//[COMMENTS]
/*
When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.

Instructions
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

abTest(2,2) should return a number
abTest(2,2) should return 8
abTest(-2,2) should return undefined
abTest(2,-2) should return undefined
abTest(2,8) should return 18
abTest(3,3) should return 12
*/
//[COMMENTS]

// Setup
function abTest(a, b) {
  // Only change code below this line
  
  if(a < 0 || b < 0)
    return;
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
