import mongoose from 'mongoose'
const Schema = mongoose.schema()

const userSchema = Schema({
    nombreCompleto: String,
    rol: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    activo: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('user', userSchema);