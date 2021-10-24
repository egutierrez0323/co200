const saleController = require('./sale.controller');
const productController = require('./product.controller');
const salesPersonController = require('./salesPerson.controller');
const userController = require('./user.controller');

module.exports = Object.freeze({
    productController,
    saleController,
    salesPersonController,
    userController
});