'use strict';

// import Node from './node';
// import BinaryTree from './binary-tree';


// Big O of Traversals are BigO(N) => where N == number of nodes
// Space - Big O(H)=> where H == height becuse function goes in stack going down, but gets popped to go back up)

const preOrderTraversal = (node, visit) => {
  if (!node) {
    return undefined;
  }
  visit(node);
  preOrderTraversal(node.left, visit);
  preOrderTraversal(node.right, visit);
  return undefined;
};
const postOrderTraversal = (node, visit) => {
  if (!node) {
    return undefined;
  }
  postOrderTraversal(node.left, visit);
  postOrderTraversal(node.right, visit);
  visit(node);
  return undefined;
};

const inOrderTraversal = (node, visit) => {
  if (!node) {
    return undefined;
  }
  inOrderTraversal(node.left, visit);
  visit(node);
  inOrderTraversal(node.right, visit);
  return undefined;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
