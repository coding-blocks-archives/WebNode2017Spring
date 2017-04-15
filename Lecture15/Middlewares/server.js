/**
 * Created by championswimmer on 15/04/17.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function m1(req, res, next) {
    console.log('We are in middleware 1');
    next();
}

function fourzerofour(req, res, next) {
    console.log('We are in middleware 2');
    res.send("This file is not here");
}

app.use(m1);

app.get('/', function (req, res) {
    console.log('Handling path "/" ');

    res.send('Hello World')

});

function public_static(staticpath) {


    return function (req, res, next) {
        let filePath = path.join(staticpath, req.path);
        console.log(req.path);
        fs.readFile(filePath, function(err, data) {
            if (!err) {
                res.send(data.toString());
            }
        })
    }
}


app.use('/public', public_static(path.join(__dirname, "folder")));

app.get('/:name',
    function (req, res, next) {
        console.log(req.path);
        req.params.name += " of Delhi";
        next();
    },
    function(req, res) {
        res.send("Hello " + req.params.name)
    }
);



app.use(fourzerofour);


app.listen(5678, function () {
    console.log("Server started on http://localhost:5678");
});