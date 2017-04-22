/**
 * Created by championswimmer on 22/04/17.
 */

const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoppingcart', 'shopper', 'shoppass', {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    price: Sequelize.FLOAT
});

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
});

const Transaction = sequelize.define('transactions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: Sequelize.INTEGER
});

Transaction.belongsTo(User);
User.hasMany(Transaction);

Transaction.belongsTo(Product);
Product.hasMany(Transaction);

sequelize.sync().then(function () {
    console.log("DB is prepared");
});

function addProduct (name, price) {
    return dbUtils.Product.create({
        name: name,
        price: price
    })
}

function listProducts () {
    return dbUtils.Product.findAll()
}

module.exports = {
    addProduct, listProducts
};

