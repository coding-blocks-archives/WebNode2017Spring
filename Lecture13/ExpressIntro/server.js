/**
 * Created by championswimmer on 09/04/17.
 */

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    console.log(req);
    res.send("<h1> Hello World </h1>")
});


app.listen(8888, function () {
    console.log("Server is started on http://localhost:8888");
});