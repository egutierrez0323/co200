const saleController = require('./sale.controller');
const productController = require('./product.controller');
const salesPersonController = require('./salesPerson.controller');

module.exports = Object.freeze({
    productController,
    saleController,
    salesPersonController
});