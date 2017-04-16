/**
 * Created by championswimmer on 16/04/17.
 */
const express = require('express');

const route = express.Router();

let teachers = [
    {name: "Arnav", role: "teacher"},
    {name: "Digvijay", role: "TA"},
    {name: "Aayush", role: "TA"}
];

route.get('/all', (req, res) => res.send(teachers));

module.exports = route;