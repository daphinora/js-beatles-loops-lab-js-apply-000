// i already completed this on the prep course lesson, but I want to try it again now that I understand my mistakes better. Here's to hoping I don't make the same mistakes!! :don

function theBeatlesPlay(musicians, instruments) {
 var array = [];
 
 for(var i = 0; i < musicians.length; i++) {
   var str = musicians[i] + " plays " + instruments[i];
   array.push(str);
 }
 return array;
}

// okay, biggest problem with the for loops is the initialization bit--you keep forgetting to make it a VARIABLE "(var i = 0;)" instead of just (i=0) you pleb

function johnLennonFacts(array) {
  var i = 0;
  var newArray = []
  var factsCounter = array.length
  
  while (factsCounter > 0) {
    newArray.push(array[i] + "!!!")
    factsCounter--
    i++
  }
  return newArray
}


// okay, the while loop. sigh. biggest problem was remembering to add the factsCounter variable--running it as "array.length" leads to an "undefined!!!" result :/ why? idk. i assume it's because you can't just say "array.lenght--" and have it work just fine. might be an internal thing? i'm not too sure why it wouldn't work. i'll explore it more later :/

//okay, i just worked on this do-while loop like ten minutes ago. I should be able to do it just fine, yeah? yeah. fuck

function iLoveTheBeatles(num) {
  var i = 0
  var array = []
  
  do {array.push("I love the Beatles!")
  i++
    
  }
}









