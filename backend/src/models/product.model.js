const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    id: {
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

const Product = mongoose.model('product', productSchema);