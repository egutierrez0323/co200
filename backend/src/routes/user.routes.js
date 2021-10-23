import express from 'express';
const router = express.Router();
import user from '../controllers/user.controller';


router.get('/users', userController.getUsers);

export default router;