import mongoose from 'mongoose'
const Schema = mongoose.schema()

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

const User = mongoose.model('salesPerson', salesPersonSchema);