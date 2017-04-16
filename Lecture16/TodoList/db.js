/**
 * Created by championswimmer on 16/04/17.
 */

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytododb',
    user: 'todolistuser',
    password: 'todopassword'
});

connection.connect();



module.exports = {
    addTodo: function (task, table, cb) {
        connection.query('INSERT INTO todos SET ?', {task: task}, function (err, res, col) {

            if (err) throw err;

            cb(res);
        })

    },
    fetchTodos: function(cb) {
        connection.query('SELECT * FROM todos', function (err, res, col) {

            if (err) throw err;
            cb(res);
        });

    }

};