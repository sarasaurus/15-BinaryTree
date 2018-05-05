'use strict';

// import Node from './node';
// import BinaryTree from './binary-tree';


// Big O of Traversals are BigO(N) => where N == number of nodes
// Space - Big O(H)=> where H == height becuse function goes in stack going down, but gets popped to go back up)

const preOrderTraversal = (rootNode, visit) => {
  if (!rootNode) {
    return undefined;
  }
  visit(rootNode);
  preOrderTraversal(rootNode.left, visit);
  preOrderTraversal(rootNode.right, visit);
  return undefined;
};
const postOrderTraversal = (rootNode, visit) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left, visit);
  postOrderTraversal(rootNode.right, visit);
  visit(rootNode);
  return undefined;
};

const inOrderTraversal = (rootNode, visit) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left, visit);
  visit(rootNode);
  inOrderTraversal(rootNode.right, visit);
  return undefined;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
