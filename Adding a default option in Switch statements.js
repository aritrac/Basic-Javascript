//[COMMENTS]
/*
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default 
statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
}
Instructions
Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"

switchOfStuff("a") should have a value of "apple"
switchOfStuff("b") should have a value of "bird"
switchOfStuff("c") should have a value of "cat"
switchOfStuff("d") should have a value of "stuff"
switchOfStuff(4) should have a value of "stuff"
You should not use any if or else statements
You should have at least 3 break statements
*/
//[COMMENTS]

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);