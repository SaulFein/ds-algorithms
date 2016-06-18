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
    vm.tops[stackIndex]++;
  }
  vm.pop = function(stackIndex){
  var popped = vm.map[stackIndex][vm.tops[stackIndex]-1];
    vm.map[stackIndex].length = vm.map[stackIndex].length -1;
    vm.tops[stackIndex]--;
    console.log("This is popped " + popped)
    return popped;
  }
}

var s = new Stack(2);

s.push(1, 'a');
s.push(0,'c');
s.push(0, 'b');
s.push(0, 'd');
s.pop(0);

console.log(s);
