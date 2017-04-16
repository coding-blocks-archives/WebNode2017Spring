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

route.get('/', (req, res) => {
    res.render('page', {
        title: "Students Page",
        body: "Get all data about students here"
    })
});

route.get('/all', (req, res) =>  {
    res.render('students', {
        title: "Student List",
        students: students
    })
});

route.get('/add', (req, res) => {
    students.push(req.query.name);
    res.redirect('/students/all');
});

module.exports = route;