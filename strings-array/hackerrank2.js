Array.max = function( array ){
  return Math.max.apply( Math, array );
};

Array.min = function( array ){
  return Math.min.apply( Math, array );
};

function wiggleArrangeArray(intArr) {
  var times = intArr.length;
  var zigZag = [];
  for(var i = 0; i < times; i++){
    if(i % 2 === 0){
      var max = Array.max(intArr);
      var index = intArr.indexOf(max);
      if (index > -1) {
        zigZag.push(intArr.splice(index, 1));
      }
    } else {
      var min = Array.min(intArr);
      var index = intArr.indexOf(min);
      if (index > -1) {
        zigZag.push(intArr.splice(index, 1));
      }
    }
  }

  console.log(zigZag);
}

var stuff = [1,7,5,-2];
console.log(wiggleArrangeArray(stuff));
