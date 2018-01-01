//[COMMENTS]
/*
In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the 
ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the 
strokes in order of priority; top (highest) to bottom (lowest):

Strokes			Return
1			"Hole-in-one!"
<= par - 2	"Eagle"
par - 1		"Birdie"
par			"Par"
par + 1		"Bogey"
par + 2		"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive.

golfScore(4, 1) should return "Hole-in-one!"
golfScore(4, 2) should return "Eagle"
golfScore(5, 2) should return "Eagle"
golfScore(4, 3) should return "Birdie"
golfScore(4, 4) should return "Par"
golfScore(1, 1) should return "Hole-in-one!"
golfScore(5, 5) should return "Par"
golfScore(4, 5) should return "Bogey"
golfScore(4, 6) should return "Double Bogey"
golfScore(4, 7) should return "Go Home!"
golfScore(5, 9) should return "Go Home!"
*/
//[COMMENTS]

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1){
    return "Hole-in-one!";
  }else if(strokes <= par - 2){
    return "Eagle";
  }else if(strokes == par - 1){
    return "Birdie";
  }else if(strokes == par){
    return "Par";
  }else if(strokes == par + 1){
    return "Bogey";
  }else if(strokes == par + 2){
    return "Double Bogey";
  }else{
    return "Go Home!";
  }
  
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
