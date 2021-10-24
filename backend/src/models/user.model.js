import mongoose from 'mongoose'
const Schema = mongoose.schema()

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
    }
});

const User = mongoose.model('user', userSchema);