/**
 * Created by championswimmer on 16/04/17.
 */
const express = require('express');

const app = express();

const routes = {
    students: require('./routes/students'),
    teachers: require('./routes/teachers'),
    classes: require('./routes/classes')
};

app.use('/teachers', routes.teachers);
app.use('/students', routes.students);
app.use('/classes', routes.classes);



app.listen(3678, function () {
    console.log("Server started on http://localhost:3678");
});