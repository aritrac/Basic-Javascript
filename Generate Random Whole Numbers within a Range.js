//[COMMENTS]
/*
Instead of generating a random number between zero and a given number like we did before, we can generate a random number 
that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min

Instructions
Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than 
or equal to myMin, and is less than or equal to myMax, inclusive.

The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.
The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.
The random number generated by randomRange should be an integer, not a decimal.
randomRange should use both myMax and myMin, and return a random number in your range.
*/
//[COMMENTS]

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
