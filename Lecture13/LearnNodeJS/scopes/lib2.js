/**
 * Created by championswimmer on 09/04/17.
 */

let lib = require('./lib');

console.log("count = " + lib.increaseCount());

module.exports = {
    getLib1: function () {
        return lib;
    }
};
