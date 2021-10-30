const router = require('express').Router();
const {salesPersonController} = require('../controllers');
//const {SaleMiddleware} = require('../middlewares');

router.post('/add', salesPersonController.addSalesPerson);
router.get('/list', salesPersonController.getAllSalesPersons);
router.get('/get/:id', salesPersonController.getOneSalesPerson);
router.put('/update', salesPersonController.updateSalesPerson);
router.delete('/delete/:id', salesPersonController.deleteSalesPerson);

module.exports = router;