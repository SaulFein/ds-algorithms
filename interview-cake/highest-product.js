function hightestOfThree(array) {
  // var absAr = Math.abs(array);
  // return absAr;
  array.sort(function(a,b){
    return Math.abs(a)-Math.abs(b);
  });
  // return array;
  return array[array.length -1] * array[array.length -2] * array[array.length -3];;
}

var stuff = [3, 6, 8, 4];
var stuff2 = [-10,-10,1,3,2];


console.log(hightestOfThree(stuff2));
