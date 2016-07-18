function multAllButIndex(arr, i){
  var p = 1;
  for(var j = 0; j < arr.length; j++) {
    if(j != i)
    p *= arr[j]
  }
  return p;
}

function productOfOtherNumbers(array){
  var productArray = [];
  for (var i = 0; i < array.length; i++){
    productArray.push(multAllButIndex(array, i))
  }
  return productArray;
}

var stuff = [2,1,3];
var stuff2 = [0,1,3];

console.log(productOfOtherNumbers(stuff2));
