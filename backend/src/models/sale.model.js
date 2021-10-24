const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    clienteNombre: {
        type: String,
        required: true,
        min: 1
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaPago: {
        type: Date,
        required: true
    },
    idVendedor: {
        type: Number,
        required: true
    },
    estadoVenta: {
        type: String,
        required: true
    },
    valorTotal: {
        type: Number,
        default: true,
    },
    lineas: [{
        numLinea: Number,
        productoId: Number,
        cantidad: Number,
        precioUnitario: Number
    }]
});

const Sale = mongoose.model('sale', saleSchema);