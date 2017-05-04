/**
 * Created by championswimmer on 27/04/17.
 */
const express = require('express');

const app = express();
const R1 = express.Router();
const R2 = express.Router();

R2.use('/', (req, res) => {
   res.send('r1/r2 path')
});

R1.use('/r2', R2);

app.use('/r1', R1);




app.listen(3333, function () {
    console.log("Server started on http://localhost:3333");
});