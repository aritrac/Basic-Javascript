//[COMMENTS]
/*
You can invert any match by using the uppercase version of the regular expression selector.

For example, \s will match any whitespace, and \S will match anything that isn't whitespace.

Instructions
Use /\S/g to count the number of non-whitespace characters in testString.

Your regular expression should find forty nine non-space characters in the testString.
Use the /\S/g regular expression to find non-space characters in testString.
*/
//[COMMENTS]

// Setup
var testString = "How many non-space characters are there in this sentence?";

// Only change code below this line.

var expression = /\S/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;
