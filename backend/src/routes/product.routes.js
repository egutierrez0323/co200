const router = require('express').Router();
const {productController} = require('../controllers');
const {productMiddleware} = require('../middlewares');

router.post('/add', productMiddleware.verifyTypes, productController.addProduct);
router.get('/list', productController.getAllProducts);
router.get('/get/:id', productController.getOneProduct);
router.put('/update', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;