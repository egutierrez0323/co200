import express from 'express';
const router = express.Router();
import Product from '../controllers/product.controller';


router.get('/products', productController.getProdutcs);

export default router;