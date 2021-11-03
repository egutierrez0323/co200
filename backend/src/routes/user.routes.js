const router = require('express').Router();
const {userController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

router.get('/list', userController.getAllUsers);
router.get('/get/:id', userController.getOneUser);
router.post('/add', userMiddleware.verifyTypes, userController.addUser);
router.put('/update', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
