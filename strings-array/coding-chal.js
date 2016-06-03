// Given the two arrays below, write JavaScript or jQuery code to compare each item in the arrays and output values that are common in both arrays (it is okay to run code in console).
//
// var array_one=["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
// var array_two=["dog", "goose", "kite", "meal", "laptop"];

function common(array_one, array_two){
  var combined = [];
  for(var i = 0; i < array_one.length; i++){
    for(var j = 0; j < array_two.length; j++){
      if(array_one[i] == array_two[j]){
        combined.push(array_one[i]);
      }
    }
  }
  return combined;
}

var one=["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
var two=["dog", "goose", "kite", "meal", "laptop"];


console.log(common(two,one));
