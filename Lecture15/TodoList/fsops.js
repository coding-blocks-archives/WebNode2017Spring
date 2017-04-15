/**
 * Created by championswimmer on 15/04/17.
 */

const fs = require('fs');
const path = require('path');

let mystring = "some random text";
let filePath = path.join(__dirname, "myfile.txt");

// fs.writeFile(filePath, mystring, function (err) {
//
//     if (!err) {
//         console.log("We have written file successfully");
//
//     } else {
//         console.log('There was an error writing file');
//     }
//
// });

fs.readFile(filePath, function (err, data) {
   if (!err) {
       console.log("We read the file, data is - ");
       console.log(data.toString());
   }
});
