Array.min = function(array){
  return Math.min.apply(null, array);
};

function orderArr(array){
  var reordered = [];
  var run = array.length;
  for (var i = 0; i < run; i++){
    var minimum = Array.min(array);
    reordered.push(minimum);
    var index = array.indexOf(minimum);
    if(index >-1){
      array.splice(index,1);
    }
  }
  return reordered;
}

function Stack(stackNum) {
  var vm = this;
  vm.map = {};
  vm.tops = {};
  for(var i = 0; i < stackNum; i++) {
    vm.map[i] = [];
    vm.tops[i] = 0;
  }
  vm.push = function(stackIndex, el){
    vm.map[stackIndex][vm.tops[stackIndex]] = el;
    var newArr = vm.map[stackIndex];
    vm.map[stackIndex] = orderArr(newArr);
    vm.tops[stackIndex]++;
  }
  vm.pop = function(stackIndex){
  var popped = vm.map[stackIndex][vm.tops[stackIndex]-1];
    vm.map[stackIndex].length = vm.map[stackIndex].length -1;
    var newArr = vm.map[stackIndex];
    vm.map[stackIndex] = orderArr(newArr);
    vm.tops[stackIndex]--;
    console.log("This is popped " + popped)
    return popped;
  }
}

var s = new Stack(2);

s.push(1, 1);
s.push(0, 3);
s.push(0, 1);
s.push(1, 5);
s.push(1, 3);
s.pop(0);

console.log(s);
