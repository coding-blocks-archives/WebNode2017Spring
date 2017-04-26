/**
 * Created by championswimmer on 26/04/17.
 */

const socket = io();

console.log('We are connected to server');
setTimeout(function () {
    console.log(socket.id);
}, 1000);

let chatbox = null;

window.onload = function () {

    document.getElementById('send').onclick = function () {
        let chat = document.getElementById('chat').value;

        socket.emit('chat', {chat: chat})
    };

    document.getElementById('login').onclick = function () {
        let username = document.getElementById('username').value;

        socket.emit('login', {username: username})
    };

    chatbox = document.getElementById('chatbox');
};

socket.on('chat', function (data) {
    chatbox.innerHTML +=
        "<li>" + data.sender + " : " + data.chat + "</li>"
});