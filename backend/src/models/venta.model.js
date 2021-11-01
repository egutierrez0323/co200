

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ventaSchema = new Schema({
    nombre : String,
    telefono: String,
    email: String,
    rol : String,
    estado: String
})


const Venta = mongoose.model('Venta', ventaSchema);

export default Venta;