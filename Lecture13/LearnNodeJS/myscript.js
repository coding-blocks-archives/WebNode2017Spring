/**
 * Created by championswimmer on 09/04/17.
 */


let start = new Date().getTime();
for (let i = 0; i < 100; i++) {
    let print = "";
    if (i%3 == 0) print+="fizz";
    if (i%5 == 0) print+="buzz";
    if (print == "") print = i;

    console.log(print);
}
console.log(new Date().getTime() - start);
