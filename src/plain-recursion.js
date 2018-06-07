'use strict';

// BINARY TREE NOTES

import util from 'util';
import Tree from './lib/binary-tree';
import Node from './lib/node';
import BinarySearchTree from './lib/binary-search';


const bst = new BinarySearchTree();

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

bst.insert(eight);
bst.insert(one);
bst.insert(five);
bst.insert(three);
console.log(bst.find(3));
console.log(bst.find(8));

const tree = new Tree(one);


one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

console.log('tree: ', util.inspect(tree, { showHidden: true, depth: null }));

// SHORT VERSION

// an || 'OR' function works like this:

// A     B
// false false = false
// false true = true
// true true = true
// true false = true

const _findEvenValueInBinaryTree = (node) => {
  // validation
  // perform recursive call
  if (node === null) {
    return false;
  }
  if (node.value % 2 === 0) {
    console.log(`we found an even value: ${node.value}`);
    return true;
  } 
  return _findEvenValueInBinaryTree(node.right) ||  _findEvenValueInBinaryTree(node.left);
};

const findEvenValueInBinaryTree = (inputTree) => {
  // validation
  // perform recursive call
  return _findEvenValueInBinaryTree(inputTree.root); // ?
};

findEvenValueInBinaryTree(tree); // ?

// // LONG VERSION
// const _findEvenValueInBinaryTree = (node) => {
//   // validation
//   // perform recursive call
//   if (node === null) {
//     return false;
//   }
//   if (node.value % 2 === 0) {
//     console.log(`we found an even value: ${node.value}`);
//     return true;
//   }
//   const leftTreeValue = _findEvenValueInBinaryTree(node.left); // ?
//   if (leftTreeValue === true) {
//     return true;
//   } 
//   return _findEvenValueInBinaryTree(node.right); // ?

// };

// const findEvenValueInBinaryTree = (inputTree) => {
//   // validation
//   // perform recursive call
//   return _findEvenValueInBinaryTree(inputTree.root); // ?
// };

// findEvenValueInBinaryTree(tree); // ?

// if in doubt... RETURN in recurusion!
// -----------------------------------------------------------------------
// // console.log(util.inspect(one, { showHidden: true, depth: null }));
// // console.log(util.inspect(two, { showHidden: true, depth: null }));
// // console.log(util.inspect(three, { showHidden: true, depth: null }));
// // console.log(util.inspect(four, { showHidden: true, depth: null }));
// // console.log(util.inspect(five, { showHidden: true, depth: null }));
// // console.log(util.inspect(six, { showHidden: true, depth: null }));
// // console.log(util.inspect(seven, { showHidden: true, depth: null }));
// // console.log(util.inspect(eight, { showHidden: true, depth: null }));
// // console.log(util.inspect(nine, { showHidden: true, depth: null }));


// // this is our tree: 


// // for lab build a string of numbers
// // UNDERSTAND THESE CONCEPTS THOUGH!!! THE CRITICAL THING IS UNDERTSANDING
// // SPEND YOUR TIME REVIEWING:
// /*
// in-order, pre-order, post-order traversals (there are more, but these you need)
// VOCAB:
// Node
// Edge
// Parent
// Children
// Root
// Depth
// Height
// Leval
// Balance Tree
// Binary Serach Tree
// K-ary tree
// Left Child
// Right Child
// Leaf
// */


// // export { tree }
