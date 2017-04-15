/**
 * Created by championswimmer on 15/04/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


let todos = [];

app.use('/', express.static(path.join(__dirname, "public_static")));

app.get('/fetchtodos', function (req, res) {
    res.send(todos)
});

app.post('/addtodo', function (req, res) {
    todos.push(req.body.task);
    res.redirect('/fetchtodos')
});


app.listen(4567, function () {
    console.log("Server started on http://localhost:4567");
});