var input = [
  {st:0, et: 1},
  {st:3, et: 5},
  {st:4, et: 8}
];
// var input = [
//   {st:0, et: 1},
// ];

//first create a map for each input:
function map (array) {
  var valExtract = [];
  for(var i = 0; i < array.length; i++){
    valExtract.push(array[i].st);
    valExtract.push(array[i].et);
  }
  return valExtract;
}

function cMT(array) {
  var proArr  = map(array);
  for (var i = 0; i < 24; i++){
    if (proArr.indexOf(i) == -1){
      proArr[i] = false;
    } else {
      proArr[i] = true;
    }
  }
  return proArr;
}

//when cur key(or index) is true && previous key is false set st time;
//when cur key is false and previous key is true set et time
//push time range onto the array.

  console.log(cMT(input));
