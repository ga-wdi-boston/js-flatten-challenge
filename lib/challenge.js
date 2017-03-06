'use strict';

// jscs:disable requireShorthandArrowFunctions

Array.prototype.flatten = Array.prototype.flatten || function () {
      // .reduce combines the arrays togethers
      return [].reduce.call(this, function (flat, toFlatten) {
        // .concat merges separate arrays
        return flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten() : toFlatten);
      }, []);
    };

// Do not change this.
module.exports = Array;
