const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    telefono: String,
    rol: String,
    email: String,
    password: String,
    estado: String
});

module.exports = mongoose.model('users', userSchema);