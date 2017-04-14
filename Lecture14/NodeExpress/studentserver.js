/**
 * Created by championswimmer on 14/04/17.
 */

const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

let students = [{
    name: "John",
    age: 23
}, {
    name: "Harry",
    age: 22
}];

app.get('/list', function (req, res) {
    res.send(JSON.stringify(students, 4))
});

app.get('/add', function (req, res) {
    students.push({
        name: req.query.name,
        age: req.query.age
    });

    res.redirect('/list')
});

app.post('/add', function (req, res) {
    console.log(req.body);
    students.push({
        name: req.body.name,
        age: req.body.age
    })

    res.redirect('/list')
});



app.listen(4444, function () {
    console.log("Server started on http://localhost:4444");
});