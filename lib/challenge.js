'use strict';

// jscs:disable requireShorthandArrowFunctions

let testArray = [0, [1], [2, 3], [4, [5, 6, [7, 8]]]];

function Array(testArray) {

  let tempArray = [];

  function flatten(testArray) {
    testArray.forEach(function(e) {
      Array.isArray(e) ? flatten(e) : tempArray.push(e);
    });
  }

  flatten(testArray);
  return tempArray;
}

Array(testArray);


// I am really confused because the example show that the result from
// [0, [1], [2, 3], [4, [5, 6, [7, 8]]]]  should be [0, 1, 2, 3, 4, 5, 6, 7, 8]
// but then the requirements says that the value of flatten() should not contain
// any arrays, but the result of the example is an array...

// Do not change this.
module.exports = Array;
