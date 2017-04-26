/**
 * Created by championswimmer on 26/04/17.
 */
const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

let usersockets = {};
let socketusers = {};


io.on('connection', function(socket) {
    console.log('Someone connected');
    console.log(socket.id);

    socket.on('login', function (data) {
       usersockets[data.username] = socket.id;
       socketusers[socket.id] = data.username;

    });

    socket.on('chat', function (data) {
        console.log(data);
        socket.broadcast.emit('chat', {
            sender: socketusers[socket.id],
            chat: data.chat
        })
    })

    socket.on('disconnect', function (data) {
        io.emit('chat', {
            sender: socketusers[socket.id],
            chat: "Logged Off"
        })
    })
});



app.use('/', express.static(__dirname + "/public_static"));


server.listen(3232, function () {
    console.log("Server started on http://localhost:3232");
});