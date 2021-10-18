const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
    id:{
        type: Number,
        unique: true
    },
    descripcion: String,
    valorUnitario:{
        type: Number,
        unique: true
    },
    activo: Boolean
});

module.exports = mongoose.model("Producto", ProductoSchema);