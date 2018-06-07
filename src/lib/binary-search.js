'use strict';

// import Node from './node';
// import BinaryTree from './binary-tree';


export default class BinaryTreeSearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time: 0(H) -> O(lg n)
  // Space: How many times pushed into stack, based on number of times recursed
  // Space: function is called everytime we step down a level therefore is O(H)->O(lg n) 
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }
  _insert(rootNode, nodeToInsert) {
    // 1 do i need to go left?
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
        // i will repeat same process recursively, starting at rootNode.left
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
      // i will repeat same process recursively, starting at rootNode.right
    }
  }

  // Time: O(H)-> O(lg n)
  // Space: O(H)-> O(lg n) in worst case would have to go through entire tree, but is recursed by level, how many times you go down, 
  // if you visiting every single node without taking advantage of binary tree strucutre then is O(n)--> where n # of nodes

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }
  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }
}

// processing subtree
// _funciton means its an internal funciton so should not use 

