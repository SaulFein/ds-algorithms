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


function SortedArray (){
  var self = this;
  self.arr = {};
  for(var i = 0; i < Object.keys(self.arr).length; i++){
    var pointer = -1;
    self.arr[i] = array[i];
  }
  self.sort = function () {
    for(var i = 0; i < Object.keys(self.arr).length; i++){
      for(var j = i + 1; j < Object.keys(self.arr).length; j++){
        if (self.arr[i] > self.arr[j]) {
          var less = self.arr[j];
          var more = self.arr[i];
          self.arr[i] = less;
          self.arr[j] = more;
          break;
        }
      }
    }
    return self.arr;
  }
  self.add = function(el) {
    var insertPoint = Object.keys(self.arr).length;
    self.arr[insertPoint] = el;
    self.sort();
  };
  self.sort();
}
var sA = new SortedArray();
sA.add(4);
sA.add(2);
sA.add(49);
sA.add(1);
sA.add(5);
console.log(sA.arr);
