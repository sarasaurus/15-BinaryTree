'use strict';

import util from 'util';
import Tree from './lib/binary-tree';
import Node from './lib/node';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from './lib/traversals';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new Tree(one);


one.left = two;
one.right  = three;

three.left = four;
three.right = five;

two.left = six;

six.right = seven;

seven.left = eight;
seven.right = nine;

console.log('tree: ', util.inspect(tree, { showHidden: true, depth: null }));

// console.log(util.inspect(one, { showHidden: true, depth: null }));
// console.log(util.inspect(two, { showHidden: true, depth: null }));
// console.log(util.inspect(three, { showHidden: true, depth: null }));
// console.log(util.inspect(four, { showHidden: true, depth: null }));
// console.log(util.inspect(five, { showHidden: true, depth: null }));
// console.log(util.inspect(six, { showHidden: true, depth: null }));
// console.log(util.inspect(seven, { showHidden: true, depth: null }));
// console.log(util.inspect(eight, { showHidden: true, depth: null }));
// console.log(util.inspect(nine, { showHidden: true, depth: null }));



// this is our tree: 



// for lab build a string of numbers
// UNDERSTAND THESE CONCEPTS THOUGH!!! THE CRITICAL THING IS UNDERTSANDING
// SPEND YOUR TIME REVIEWING:
/*
in-order, pre-order, post-order traversals (there are more, but these you need)
VOCAB:
Node
Edge
Parent
Children
Root
Depth
Height
Leval
Balance Tree
Binary Serach Tree
K-ary tree
Left Child
Right Child
Leaf
*/


// export { tree }