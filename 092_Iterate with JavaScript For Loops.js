//[COMMENTS]
/*
In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. 
We'll increment i by 1 in each loop iteration with i++ as our final-expression.

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray will now contain [0,1,2,3,4].

Instructions
Use a for loop to work to push the values 1 through 5 onto myArray.

You should be using a for loop for this.
myArray should equal [1,2,3,4,5].
*/
//[COMMENTS]

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for(var i = 1; i <= 5; i++){
  myArray.push(i);
}
