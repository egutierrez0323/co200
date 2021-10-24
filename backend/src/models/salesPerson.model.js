const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesPersonSchema = Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    nombreCompleto: String,
    especialidad: String,
    celular: {
        type: Number,
        min: 10
    },
    fechaIngreso: Date
});

module.exports = mongoose.model('salesPerson', salesPersonSchema);