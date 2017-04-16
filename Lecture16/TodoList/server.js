/**
 * Created by championswimmer on 16/04/17.
 */
const express = require('express');
const bodyparser = require('body-parser');

const db = require('./db');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "hbs");


let todos = [];

app.get('/', (req, res) => {

    db.fetchTodos(function (todos) {
        res.render('main', {todos: todos})
    })
});

app.post('/addtodo', (req, res) => {

    db.addTodo(req.body.newtodo, function (result) {
        res.redirect('/');
    })


});

app.listen(3214, function () {
    console.log("Server started on http://localhost:3214");
});