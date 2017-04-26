/**
 * Created by championswimmer on 26/04/17.
 */

const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;


let mongoPath = "mongodb://localhost:27017/mydb";

MongoClient.connect(mongoPath, function (err, db) {

    if (err) {
        throw err
    }
    console.log('Connected');

    // Creates new collection if not exists
    const todos = db.collection('todos');

    // Insert one document to collection

    // todos.insertOne({
    //     task: "Learn to use mongodb",
    //     done: false
    // }, function (err, result) {
    //     if (err) throw err
    //
    //     console.log(result);
    // })

    //Find all documents from collection
    todos.find({done: false}).toArray(function (err, entries) {
        if (err) throw err;

        console.log(entries);
    });

    // Inserting many together
    // todos.insertMany([
    //     {task: "Task one", done: true},
    //     {task: "Task two", done: true},
    //     {task: "Another task", done: false},
    //
    // ], function (err, result) {
    //     if (err) throw err;
    //     console.log(result.ops);
    // })


});
