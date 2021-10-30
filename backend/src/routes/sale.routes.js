const router = require('express').Router();
const {saleController} = require('../controllers');
//const {SaleMiddleware} = require('../middlewares');

router.post('/add', saleController.addSale);
router.get('/list', saleController.getAllSales);
router.get('/get/:id', saleController.getOneSale);
router.put('/update', saleController.updateSale);
router.delete('/delete/:id', saleController.deleteSale);

module.exports = router;