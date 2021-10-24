const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    idProducto: {
        type: Number,
        unique: true,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        min: 1
    },
    valorUnitario:{
        type: Number,
        required: true,
        default: 0
    },
    activo: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('products', productSchema);