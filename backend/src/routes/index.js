const productRoutes = require('./product.routes');
const salesPersonRoutes = require('./salesPerson.routes');
const saleRoutes = require('./sale.routes');
const userRoutes = require('./user.routes');

module.exports = Object.freeze({
    saleRoutes,
    salesPersonRoutes,
    productRoutes,
    userRoutes
});