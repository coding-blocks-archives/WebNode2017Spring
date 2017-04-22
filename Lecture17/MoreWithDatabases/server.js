/**
 * Created by championswimmer on 22/04/17.
 */
const express = require('express');
const bodyParser = require('body-parser');

const dbUtils = require('./dbutils');

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + "/public_static"));
app.use('/', require('./routes/pagerouter'));
app.use('/api', require('./routes/apirouter'));



app.listen(3456, function () {
    console.log("Server started on http://localhost:3456");
});