/**
 * Created by championswimmer on 22/04/17.
 */
const route = require('express').Router();
const dbUtils = require('../dbutils');

route.get('/products', function (req, res) {
    dbUtils.Product.findAll().then(function (products) {
        res.render('products', {products: products})
    })
});

route.post('/products/add', function (req, res) {
    let price = parseInt(req.body.price);
    let name = req.body.name;

    dbUtils.Product.create({
        name: name,
        price: price
    }).then(function (data) {
        console.log('Created');
        console.log(data);
        res.redirect('/products')
    })


});

module.exports = route;