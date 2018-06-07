'use strict';

// const sampleArray = [1, 2, 3, 4, 5];

// const recursiveArrayAddition = (array) => {
//   // 1 preform validation and error checks
//   // call recursive function
//   // TODO add validation
//   return _recursiveArrayAddition(array, 0); // ?
// };

// const _recursiveArrayAddition = (array, index) => { // eslint-disable-line
// // in recursion you MUST KEEP TRACK OF RETURN VALUES
// // Calculate BASE CASE FIRST
//   if (index === array.length - 1) {
//   // have processed the last element
//   // what you return when recursion is finished-- ie what is ultimately returned
//     return array[index]; // ?
//   }
//   // what is returned each time function recurses
//   // this is called tail-based recursion where you return the recursive function
//   return array[index] + _recursiveArrayAddition(array, index + 1); // ?
//   // if you return something other than the recursion, its called head based recursion
// };

// recursiveArrayAddition(sampleArray); // ?

//--------------------------------------------------------------------

const sampleArray = [1, 2, 3, 4, 5];

const recursiveArrayAddition = (array) => {
  // 1 preform validation and error checks
  // call recursive function
  // TODO add validation
  return _recursiveArrayAddition(array, 0, 0); // ?
};

const _recursiveArrayAddition = (array, index, sum) => { // eslint-disable-line
// YOU MUST RETURN THE RETURN VALUE AT EVERY SINGLE STEP!!! otherwise you ay 'lose a value'
// Calculate BASE CASE FIRST
  if (index === array.length - 1) {
    // return! so can use value
    return array[index] + sum; // ?
  }
  // return! so can use value
  return  _recursiveArrayAddition(array, index + 1, sum + array[index]); // ?
  // if you return something other than the recursion, its called head based recursion
};
recursiveArrayAddition(sampleArray); // ?
// you can keep track of values using parameters
// try to draw out call stack
// use debugger tools to understand what happens each time
// vinicio spent a whole semester on recursion in college!
// 
