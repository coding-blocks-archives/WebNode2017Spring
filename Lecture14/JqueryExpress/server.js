/**
 * Created by championswimmer on 14/04/17.
 */

const express = require('express');

const app = express();

app.use('/', express.static(__dirname + "/public_static" ));

app.get('/funnyquote', function (req, res) {
    res.send("This is something funny, please laugh!")
});

app.listen(4567, function () {
    console.log("Server started on http://localhost:4567");
});