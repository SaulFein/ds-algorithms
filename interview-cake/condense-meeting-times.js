var input = [
  {st:0, et: 1},
  {st:3, et: 5},
  {st:4, et: 8}
];

function fill(a, b) {
  var arrT = [];
  arrT.push(a);
  for (var i = 0; i < b; i++){
    if(a === b) break;
    a = a+1;
    arrT.push(a);
  }
  return arrT;
}

function sort(a, b) {
  return a - b;
}

function map (array) {
  var valExtract = [];
  for(var i = 0; i < array.length; i++){
    valExtract.push(fill(array[i].st, array[i].et));
  }
  var merged = [].concat.apply([],valExtract);
  merged.sort()
  return merged;
}
//map output
//[ 0, 1, 3, 4, 4, 5, 5, 6, 7, 8 ]

function cMT(array) {
  var proArr  = map(array);
  var secArr = [];
  for(var i = 0; i <= 24; i++){
    if(proArr.indexOf(i) == -1){
      secArr[i] = false;
    }
    else {
      secArr[i] = true;
    }
  }
  return secArr;
}
//cMT output
//[ true, true, false, true, true, true, true, true, true, false, false, false, false, false, false, false, false, ....]
//  0      1      2     3      4     5     6     7     8     9      10

function range(array) {
  var newArr = cMT(array);
  var stArr = [];
  var etArr = [];
  var tR = [];
  for (var i = 0; i < 24; i++) {
    if((newArr[i] === true) && (i === 0)) stArr.push(i);
    if((newArr[i] === true) && (newArr[i-1] === (false))){
      stArr.push(i);
       start = i;
    }
    if((newArr[i] === false) && (newArr[i-1] === true)){
      etArr.push(i-1);
       end = i-1;
    }
  }
  for(var i = 0; i < stArr.length; i++){
    tR.push({st:stArr[i], et:etArr[i]});
  }
  return tR;
}
//when cur key(or index) is true && previous key is false set st time;
//when cur key is false and previous key is true set et time
//push time range onto the array.
  console.log(range(input));
//[ { st: 0, et: 1 }, { st: 3, et: 8 } ]
