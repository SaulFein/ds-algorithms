// var arr = [5, 2, 4, 7, 8, 1];
//
// Array.min = function(array){
//   return Math.min.apply(null, array);
// };
//
// function orderArr(array){
//   var reordered = [];
//   var run = array.length;
//   for (var i = 0; i < run; i++){
//     var minimum = Array.min(array);
//     reordered.push(minimum);
//     var index = array.indexOf(minimum);
//     if(index >-1){
//       array.splice(index,1);
//     }
//   }
//   return reordered;
// }
// console.log(orderArr(arr));
///////////////////////////////////////////////////////////
//
// function SortedArray(array) {
//   this.array = array;
//   function sort(array){
//     for (var i = 0; i < array.length; i++){
//       for (var j = i+1; j < array.length; j++){
//         if(i <)
//       }
//     }
//   }
//   this.add = function(el) {
//     for(var i = 0; i < array.length; i++){
//       if (el <= array[i]){
//
//       }
//     }
//   }
//
// }

// var stuff = [2, 3, 1, 6, 5];
//
// function SortedArray (array){
//   this.arr = {};
//   for(var i = 0; i < array.length; i++){
//     var pointer = -1;
//     this.arr[i] = array[i];
//   }
//   for(var i = 0; i < array.length; i++){
//     for(var k = array.length -1; k < 0; k--){
//       if(this.arr[i] > this.arr[k]){
//         i = k;
//         console.log(i);
//         break;
//       }
//       // if(this.arr[i] < this.arr[k]){
//       //   pointer = pointer -1;
//       //   delete this.arr[i];
//       // }
//     }
//   }
//   return this.arr;
// }
//
// var sA = new SortedArray(stuff);
//
// console.log(sA);


var stuff = [2, 3, 1, 6, 5];

function SortedArray (array){
  this.arr = {};
  for(var i = 0; i < array.length; i++){
    var pointer = -1;
    this.arr[i] = array[i];
  }
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if (this.arr[i] > this.arr[j]) {
        var less = this.arr[j];
        var more = this.arr[i];
        this.arr[i] = less;
        this.arr[j] = more;
        break;
      }
    }
  }
  return this.arr;
}

var sA = new SortedArray(stuff);

console.log(sA);
