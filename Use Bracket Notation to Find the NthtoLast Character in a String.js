//[COMMENTS]
/*
Instructions
Use bracket notation to find the second-to-last character in the lastName string.

Hint
Try looking at the thirdToLastLetterOfFirstName variable declaration if you get stuck.

secondToLastLetterOfLastName should be "c".
You have to use .length to get the second last letter.
*/
//[COMMENTS]

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
