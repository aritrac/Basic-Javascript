//[COMMENTS]
/*
Variables which are declared within a function, as well as the function parameters have local scope. 
That means, they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // "foo"
console.log(loc); // "undefined"
loc is not defined outside of the function.

Instructions
Declare a local variable myVar inside myLocalScope. Run the tests and then follow the instructions commented out in the editor.

Hint
Refreshing the page may help if you get stuck.
*/
//[COMMENTS]

function myLocalScope() {
 'use strict';
  var myVar = "test";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test
