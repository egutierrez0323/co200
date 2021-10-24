const router = require('express').Router();
const {productController} = require('../controllers');
const {productMiddleware} = require('../middlewares');

router.post('/add', productMiddleware.verifyTypes, productMiddleware.verifyIdProducto, productController.addProduct);
router.get('/list', productController.getAllProducts);
router.put('/update', productMiddleware.verifyTypes, productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;