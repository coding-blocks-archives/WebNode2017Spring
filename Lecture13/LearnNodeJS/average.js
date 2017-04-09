/**
 * Created by championswimmer on 09/04/17.
 */



if (process.argv.length > 2) {
    let numbers = process.argv.slice(2);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    console.log(sum/numbers.length)
} else {
    console.log(0);
}