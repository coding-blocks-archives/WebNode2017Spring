const express = require('express');
const bodyparser = require('body-parser');

const app = express();


function mod1(req, res, next) {
    console.log('Mod1 running');

    if (req.query.q)
    req.query.q = req.query.q.replace('a', 'b');

    next();
}

function mod2(req, res, next) {
    console.log('Mod2 running');
    //next();
    res.send(res.body.split(' '));
}

app.use(mod1);

app.get('/', function (req, res, next) {
    console.log('Get function');

    res.set("a", " Some String Here ");
    res.body = " You said this to me = " + req.query.q;
    next();

});

app.use(mod2);


app.listen(4444, () => {console.log("http://localhost:4444");})