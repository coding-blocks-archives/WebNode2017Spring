/**
 * Created by championswimmer on 22/04/17.
 */

function someAsyncFunction(callback) {
    setTimeout(function () {
        console.log('runs after 10 seconds');
        callback();
    }, 5000);
}


// someAsyncFunction(function () {
//     console.log('Do after async function done');
// })


function givePromise () {

    return new Promise(function(resolve, reject) {
        // someAsyncFunction(function(err) {
        //     if (err)
        //         reject();
        //     else
        //         resolve();
        // });
        console.log('going to resolve');
        resolve();
        console.log('resolved');

    });
}

function generatePromise() {
    return givePromise();
}

generatePromise().then(function () {
    console.log('Fulfilled');
}).error(function () {

});