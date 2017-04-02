/**
 * Created by championswimmer on 02/04/17.
 */

function addGen (value) {

    function add (operand) {
        return operand + value;
    }
    console.log(add);

    return add;
}

let twoadder = addGen(2);
let threeadder = addGen(3);