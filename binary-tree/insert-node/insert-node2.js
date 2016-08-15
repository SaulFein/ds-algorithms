
function BST() {
    this.root = null;
    this.insert = insert;
}

function Node (val) {
  this.val = val;
  this.left  = null;
  this.right = null;
  this.count = 1;
}

 var insert = function(val) {
  var newNode = new Node(val);
  if(this.root === null) {
    this.root = newNode;
  } else {
    insertNode(this.root, newNode);
  }
}

 insertNode = function(node, newNode) {
  if(newNode.val < node.val) {
    if(node.left === null){
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else if(newNode.val > node.val){
    if(node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  } else if(newNode.val === node.val){
    node.count++;
  }
}

var tree = new BST();
tree.insert(5);
tree.insert(7);
tree.insert(6);
tree.insert(3);
tree.insert(5);

console.log(tree);
