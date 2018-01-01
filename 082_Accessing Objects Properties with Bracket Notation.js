//[COMMENTS]
/*
The second way to access the properties of an object is bracket notation ([]). If the property of the object you 
are trying to access has a space in it, you will need to use bracket notation.

Here is a sample of using bracket notation to read an object property:

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
Note that property names with spaces in them must be in quotes (single or double).

Instructions
Read the values of the properties "an entree" and "the drink" of testObj using bracket notation and assign 
them to entreeValue and drinkValue respectively.

entreeValue should be a string
The value of entreeValue should be "hamburger"
drinkValue should be a string
The value of drinkValue should be "water"
You should use bracket notation twice
*/
//[COMMENTS]

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
