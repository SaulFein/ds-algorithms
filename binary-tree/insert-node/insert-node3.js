function BST(){
  this.root = null;
  this.insert = insert;
}

function BTN(val){
  this.val = val;
  this.left = null;
  this.right = null;
  this.count = 1;
}

function insert(val) {
  var node = new BTN(val);
  if(this.root === null) {
    this.root = node;
  } else {
    curN = this.root;
    while(true) {
      if(val < curN.val) {
        if(curN.left === null) {
          curN.left = node;
          break;
        }
        curN = curN.left;
      }
      else if (val > curN.val) {
        if(curN.right === null) {
          curN.right = node;
          break;
        }
        curN = curN.right;
      } else if(val === curN.val){
          curN.count++;
          break;
      }
    }
  }
}

var tree = new BST;
tree.insert(5)
tree.insert(2)
tree.insert(7)
tree.insert(3)
tree.insert(9)
tree.insert(5)
tree.insert(10)
tree.insert(1)
tree.insert(6)

console.log(tree);
