/**
 * Created by championswimmer on 14/04/17.
 */

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send("Hello World");

    console.log(res);

});

app.get('/hello', function (req, res) {
    //res.status(501);
    res.status(200);
    res.send("Some response");

});

app.post('/hello', function (req, res) {
    res.send('Response from post')
});

app.get('/student', function (req, res) {
    console.log(req.query);
    res.send("Student Details");
});


app.listen(3434, function () {
    console.log('Server started on port 3333');
});

