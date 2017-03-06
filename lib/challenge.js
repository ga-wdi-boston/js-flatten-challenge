'use strict';

// jscs:disable requireShorthandArrowFunctions
Array.prototype.flatten = function() {
  return this.reduce(function reduceArray(a, b) {
    if (Array.isArray(b)) {
      return b.reduce(reduceArray, a);
    }
    return [...a, b];
  }, []);
};

// Do not change this.
module.exports = Array;
