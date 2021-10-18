const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    nombreCompleto: String,
    rol: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    role: String,
    activo: Boolean
});

module.exports = mongoose.model("Usuario", UsuarioSchema);