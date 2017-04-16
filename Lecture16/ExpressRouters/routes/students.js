/**
 * Created by championswimmer on 16/04/17.
 */
const express = require('express');

const route = express.Router();

let students = [
    "Aarushi",
    "Vaidika",
    "Rishabh",
    "Piyush"
];

route.get('/all', (req, res) => res.send(students));

module.exports = route;