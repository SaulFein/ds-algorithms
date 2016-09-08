function map(arr) {
  var arrMap = {};
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] in arrMap) {
      arrMap[arr[i]]++;
    } else {
      arrMap[arr[i]] = 1;
    }
  }
  return arrMap;
}
function lonelyInteger(arr) {
  if(arr.length < 1) {
    // console.log("array input is empty");
    return "array is input is empty";
  }
  var mappedArray = map(arr);
  for (key in mappedArray){
    if(mappedArray[key] === 1){
      return key;
    }
  }
}

var ar1 = [];

console.log(lonelyInteger(ar1));
