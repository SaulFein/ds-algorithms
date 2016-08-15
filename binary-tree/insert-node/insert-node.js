  function BinaryTreeNode(val, left, right) {
    this.val = val;
    this.left  = left;
    this.right = right;
  }

  BinaryTreeNode.prototype.insertLeft = function(val) {
    this.left = new BinaryTreeNode(val);
    return this.left;
  };

  BinaryTreeNode.prototype.insertRight = function(val) {
    this.right = new BinaryTreeNode(val);
    return this.right;
  };

  function BST() {
      this.root = null;
      this.insertNode = insertNode;
  }

  function insertNode(val){
    var n = new BinaryTreeNode(val);
    if(this.root === null){
      this.root = n;
    } else {
      var current = this.root;
      var parent;
      while(true) {
        parent = current;
        if (val < current.val) {
          current = current.left;
          if (current == null) {
            parent.left = n;
            break;
          }
        }
        else {
          current = current.right;
          if(current == null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }

var tree = new BST();
tree.insertNode(5);
tree.insertNode(9);
tree.insertNode(7);
tree.insertNode(2);
tree.insertNode(20);

console.log(tree);
