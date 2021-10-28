

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre : String,
    telefono: String,
    email: String,
    rol : String,
    estado: String
})


const Producto = mongoose.model('Producto', productoSchema);

export default Producto;