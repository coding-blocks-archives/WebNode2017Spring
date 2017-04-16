/**
 * Created by championswimmer on 16/04/17.
 */

const express = require('express');

const route = express.Router();

let classes = [
    "L1",
    "L2",
    "L3",
    "L4"
];

route.get('/all', (req, res) => res.send(classes));

module.exports = route;