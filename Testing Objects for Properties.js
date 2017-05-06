//[COMMENTS]
/*
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) 
method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the 
property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false

Instructions
Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, 
return "Not Found".

checkObj("gift") should return "pony".
checkObj("pet") should return "kitten".
checkObj("house") should return "Not Found".
*/
//[COMMENTS]

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }else{
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
