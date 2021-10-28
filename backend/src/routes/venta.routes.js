import express from 'express';
const ventaRoutes = express.Router();
import ventaController from '../controllers/venta.controller';


ventaRoutes.get('/get-ventas', ventaController.getVentas);
ventaRoutes.post('/save-venta', ventaController.saveVenta);
ventaRoutes.delete('/delete-venta/:id',ventaController.deleteVenta);

export default ventaRoutes;