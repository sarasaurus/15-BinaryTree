# Sarah Bixler
**Author**: Binary Tree   
**Version**: 1.0.0 
## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->
## Getting Started
1. fork this repo
2. npm i to install dependancies
- This package exports the following functions that operate over a Tree instance :
    __preOrderTraversal(node, callback), postOrderTraversal(node,callback), inOrderTraversal(node,callback)__
3. To use you must __import__ these methods into your file and use the node and tree constructors provided in __node.js__ and __binary-tree.js__ to create a tree for the methods to traverse.  You can see __examples__ of this in __main.js__ and in __main.test.js__

##Exported Functions
- __given this tree:__ root.value: b, root.left:a, root.right: c
- Pre Order Traversal (node [1], callback [2] )
    traverses the binary tree in left, right, root order (a,c,b)
- Post Order Traversal  (node*, callback**)
    traverses the binary tree in root, left, right order (b,a,c)
- In Order Traversal  (node*, callback**)
    traverses the binary tree in left, root, right order (a,b,c)
[1] node refers to the root node of the tree or sub-tree you want to travers
[2] the callback function, takes the argument (node) inside the main function-- each time the node is visited the callback is invoked.  An example of this can be found in main.test.js lines 25-29.


## Architecture
This uses the Node.js framework, with ES6 conventions and syntax. Babel is the transpiler.  Jest is used for testing. dotenv helps with environment variables and setup.  Travis.yml checks build status.

## Change Log
5-6-2018 -- Binary Tree and Traversals, implimented, tests passing