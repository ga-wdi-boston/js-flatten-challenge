'use strict';

// jscs:disable requireShorthandArrowFunctions

// Write your code here.
const enableFlatten = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? enableFlatten(val) : val
  ),
  []
);

Array.prototype.flatten = function () {
  return enableFlatten(this);
};

// Do not change this.
module.exports = Array;
