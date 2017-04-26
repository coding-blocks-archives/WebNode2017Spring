/**
 * Created by championswimmer on 26/04/17.
 */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./mongohandler');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "hbs");


app.get('/', function (req, res) {

    db.getAllTodos(function (allTodos) {
        res.render("todos", {todos: allTodos})

    })

});

app.post('/add', function (req, res) {

    db.insertTodo({
        task : req.body.task,
        done: false
    }, function () {
        res.redirect('/');
    })

});

app.listen(3333, function () {
    console.log("Server started on http://localhost:3333");
});