//[COMMENTS]
/*
You can run the same code multiple times by using a loop.

Another type of JavaScript loop is called a "while loop", because it runs "while" a specified condition is true 
and stops once that condition is no longer true.

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
Let's try getting a while loop to work by pushing values to an array.

Instructions
Push the numbers 0 through 4 to myArray using a while loop.

You should be using a while loop for this.
myArray should equal [0,1,2,3,4]
*/
//[COMMENTS]

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while(i <= 4){
  myArray.push(i);
  i++;
}
