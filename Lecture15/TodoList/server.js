/**
 * Created by championswimmer on 15/04/17.
 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const filePath = path.join(__dirname, "todos.json");


let todoList = [];

function refreshTodos(done) {
    fs.readFile(filePath, function (err, data) {
        if (!err) {
            try {
                todoList = JSON.parse(data.toString());
            } catch (e) {
                todoList = [];
            }
            done();
        }
    });
}

function updateTodos(todos, done) {
    fs.writeFile(filePath, JSON.stringify(todos), function(err) {
        done();
    });
}


app.use('/', express.static(path.join(__dirname, "public_static")));

app.get('/fetchtodos', function (req, res) {
    console.log(todoList);
    refreshTodos(function () {
        res.send(todoList)
    })
});

app.post('/addtodo', function (req, res) {

    refreshTodos(function () {
        todoList.push(req.body.task);
        updateTodos(todoList, function () {
            res.redirect('/fetchtodos')
        })
    })


});


app.listen(4567, function () {
    console.log("Server started on http://localhost:4567");
});