/**
 * Created by championswimmer on 22/04/17.
 */
const route = require('express').Router();
const dbUtils = require('../dbutils');

route.get('/products', function (req, res) {
    dbUtils.listProducts().then(function (products) {
        res.send(products)
    })
});

route.post('/products/add', function (req, res) {
    let price = parseInt(req.body.price);
    let name = req.body.name;

    dbUtils.addProduct(name, price).then(function (data) {
        res.redirect('/api/products')
    })



});

module.exports = route;