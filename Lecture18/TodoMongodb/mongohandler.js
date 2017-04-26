/**
 * Created by championswimmer on 26/04/17.
 */

const MongoClient = require('mongodb').MongoClient

// Connection URL
const todoDbPath = 'mongodb://localhost:27017/todos';
// Use connect method to connect to the Server

let mydb = null;

MongoClient.connect(todoDbPath, function(err, db) {
    console.log("Connected correctly to server");

    mydb = db;

});

function insertTodo(todo, done) {
    let todos = mydb.collection('todos');

    todos.insertOne(todo, function (err, result) {
        done(result.ops)
    })

}

function getAllTodos(done) {
    let todos = mydb.collection('todos');

    todos.find({}).toArray(function (err, result) {
        done(result)
    })
}


module.exports = {
    insertTodo, getAllTodos
};