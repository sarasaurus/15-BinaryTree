'use strict';
/*
#### Testing
* write at least three test assertions for each method of the Binary Tree Data Structure
* organize your tests into appropriate describe/test blocks for test output readability
 */
// import util from 'util';
import Tree from '../lib/binary-tree';
import Node from '../lib/node';
// import testTree from '../main';
import { preOrderTraversal, postOrderTraversal, inOrderTraversal } from '../lib/traversals';

let tree = null;

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

let values = '';
const print = (node) => {
  values += node.value;
  return undefined;
};
afterEach(() => {
  values = '';
});
describe('testing binary tree traversals', () => {
  // let values = [];
  test('pre-order', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    preOrderTraversal(tree.root, print);
    expect(values).toEqual('126789345');
  });
  test('post-order', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    postOrderTraversal(tree.root, print);
    expect(values).toEqual('897624531');
  });
  test('in-order', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    inOrderTraversal(tree.root, print);
    expect(values).toEqual('687921435');
  });
});

