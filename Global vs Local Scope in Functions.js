//[COMMENTS]
/*
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
The function myFun will return "Head" because the local version of the variable is present.

Instructions
Add a local variable to myOutfit to override the value of outerWear with "sweater".

Do not change the value of the global outerWear
myOutfit should return "sweater"
Do not change the return statement
*/
//[COMMENTS]

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";  
  // Only change code above this line
  return outerWear;
}

myOutfit();
