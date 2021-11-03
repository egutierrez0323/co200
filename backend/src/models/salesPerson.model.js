const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesPersonSchema = Schema({
    nombreCompleto: String,
    especialidad: String,
    celular: Number,
    fechaIngreso: Date
});

module.exports = mongoose.model('salesPersons', salesPersonSchema);