const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    producto: String,
    valor: Number,
    estado: String
});

module.exports = mongoose.model('products', productSchema);