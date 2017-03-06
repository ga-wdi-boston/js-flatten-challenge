'use strict';

// jscs:disable requireShorthandArrowFunctions
const flatten = require('array-flatten');
const array = [0, [1], [2, [3], []], []];
// I npm installed moduel npm array-flatten --save
flatten.Array(array);
flatten.depth(array, 3);

console.log([0, [1], [2, [3], []], []].flatten());
console.log(array.flatten());
console.log(Array);

// Do not change this.
module.exports = Array;
