'use strict';

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function() {
  return this.data;
};

function BST() {
  this.root = null;
  this.count = 0;
}

BST.prototype.insert = function(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = n;
          break;
        }
         }
      else {
        current = current.right;
        if (current === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.search = function(newFunction) {
  function helper(node) {
    if (node !== null) {
      helper(node.left);
      newFunction.call(node);
      helper(node.right);
    }
  }
  helper(this.root);
};

BST.prototype.counter = function() {
  var localCount = 0;
  this.search(function() {
    localCount++;
  });
  return localCount;
};

BST.prototype.edgeCounter = function(node) {
  var edgeCount = 0;
  var helper = function(node) {
    if (node !== null) {
      helper(node.left);
      edgeCount++;
      helper(node.right);
    }
  };
  helper(node);
  return edgeCount - 1;
};

BST.prototype.min = function() {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};

BST.prototype.max = function() {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
};

BST.prototype.inOrder = function(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.show() + ' ');
    this.inOrder(node.right);
  }
};

module.exports = BST;
