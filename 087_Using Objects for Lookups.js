//[COMMENTS]
/*
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an 
object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know 
that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"

Instructions
Convert the switch statement into a lookup table called lookup. Use it to lookup val and assign the associated string to the result variable.

phoneticLookup("alpha") should equal "Adams"
phoneticLookup("bravo") should equal "Boston"
phoneticLookup("charlie") should equal "Chicago"
phoneticLookup("delta") should equal "Denver"
phoneticLookup("echo") should equal "Easy"
phoneticLookup("foxtrot") should equal "Frank"
phoneticLookup("") should equal undefined
You should not use case, switch, or if statements
*/
//[COMMENTS]

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  // Original code that was modified below
  // switch(val) {
  //   case "alpha": 
  //     result = "Adams";
  //     break;
  //   case "bravo": 
  //     result = "Boston";
  //     break;
  //   case "charlie": 
  //     result = "Chicago";
  //     break;
  //   case "delta": 
  //     result = "Denver";
  //     break;
  //   case "echo": 
  //     result = "Easy";
  //     break;
  //   case "foxtrot": 
  //     result = "Frank";
  // }
  
  var codes = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  };
  
  result = codes[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
