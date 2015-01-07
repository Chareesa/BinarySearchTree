'use strict';

//public module
var expect = require('chai').expect;
//my module
var BST = require('../binaryExercises.js');

describe('Testing binary tree', function() {
  var tree = new BST();
  tree.insert(23);
  tree.insert(45);
  tree.insert(16);
  tree.insert(37);
  tree.insert(3);
  tree.insert(99);
  tree.insert(22);

  var txtFileBst = new BST();

  it('counter() should return total node count', function() {
    expect(tree.counter(tree.root)).to.eql(7);
  });

  it('edgeCounter() should return total edge count', function() {
    expect(tree.edgeCounter(tree.root)).to.eql(6);
  });

  it('min() should return node with the lowest data', function() {
    expect(tree.min()).to.eql(3);
  });

  it('max() should return node with the highest data', function() {
    expect(tree.max()).to.eql(99);
  });

  it('findInFile should return a word count from example txt file', function() {
    expect(txtFileBst.findInFile('./textFile.txt', 'time')).to.eql(5);
  });
});
