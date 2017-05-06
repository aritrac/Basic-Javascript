//[COMMENTS]
/*
Instructions
Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true 
and return "No, that was false" otherwise.

trueOrFalse should be a function
trueOrFalse(true) should return a string
trueOrFalse(false) should return a string
trueOrFalse(true) should return "Yes, that was true"
trueOrFalse(false) should return "No, that was false"
*/
//[COMMENTS]

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if(wasThatTrue){
    return "Yes, that was true";
  }else{
    return "No, that was false";
  }

  // Only change code above this line.
}

// Change this value to test
trueOrFalse(true);
