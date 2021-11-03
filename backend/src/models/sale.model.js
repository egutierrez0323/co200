const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = Schema({
    clienteId: String,
    clienteNombre: String,
    ventaFecha: Date,
    idVendedor: String,
    ventaEstado: String,
    productoId: String,
    productoCantidad: Number,
    productoPrecio: Number,
    valorTotal: Number
});

module.exports = mongoose.model('sales', saleSchema);