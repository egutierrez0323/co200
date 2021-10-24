const router = require('express').Router();
const {productController} = require('../controllers');

router.get('/list', productController.getAllProducts);
/*router.post('/add', productController.addProduct);
router.put('/update', productController.deleteProduct);
router.delete('/delete/:id', productController.deleteProduct);
*/
module.exports = router;
/*module.exports = Object.freeze({
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct
})*/