const router = require('express').Router();
const {userController} = require('../controllers');
//const {SaleMiddleware} = require('../middlewares');

router.get('/list', userController.getAllUsers);
router.put('/update', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
