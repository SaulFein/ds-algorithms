Array.min = function( array ){
    return Math.min.apply( Math, array );
};

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

function getMaxProf (array) {
  if (array.length === 0) return 0;
  var buyAt = Array.min(array);
  if(array.indexOf(buyAt) === array.length-1) {
    array.pop()
    var sellAt = Array.min(array);
    return buyAt - sellAt;
   }
  else {
    var buyIndex = array.indexOf(buyAt);
    var container = array.slice(buyIndex, array.length);
    var sellAt = Array.max(container);
    return sellAt - buyAt;
  }
}

var appleStocks = [9,6,5,10,11]; //6
var appleStocks1 = [5,5,5,5,5]; //0
var appleStocks2 = [6,5,4,3,2]; //
var appleStocks3 = [];
var appleStocks4 = [10, 5, 4, 2, 1]



console.log(getMaxProf(appleStocks));
console.log(getMaxProf(appleStocks1));
console.log(getMaxProf(appleStocks2));
console.log(getMaxProf(appleStocks3));
console.log(getMaxProf(appleStocks4));
