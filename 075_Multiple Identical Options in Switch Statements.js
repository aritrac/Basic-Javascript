//[COMMENTS]
/*
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a 
break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.

Instructions
Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

sequentialSizes(1) should return "Low"
sequentialSizes(2) should return "Low"
sequentialSizes(3) should return "Low"
sequentialSizes(4) should return "Mid"
sequentialSizes(5) should return "Mid"
sequentialSizes(6) should return "Mid"
sequentialSizes(7) should return "High"
sequentialSizes(8) should return "High"
sequentialSizes(9) should return "High"
You should not use any if or else statements
You should have nine case statements
*/
//[COMMENTS]

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);
