const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    nombre: String,
    telefono: String,
    rol: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    estado: String
});

module.exports = mongoose.model('user', userSchema);