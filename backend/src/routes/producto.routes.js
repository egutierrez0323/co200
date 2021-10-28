import express from 'express';
const productoRoutes = express.Router();
import productoController from '../controllers/producto.controller';


productoRoutes.get('/get-productos', productoController.getProductos);
productoRoutes.post('/save-producto', productoController.saveProducto);
productoRoutes.delete('/delete-producto/:id',productoController.deleteProducto);

export default productoRoutes;

