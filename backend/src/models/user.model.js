import mongoose from 'mongoose'
const Schema = mongoose.schema()

const userSchema = new Schema({
    nombre : String,
    telefono : String,
    email : String,
    rol : String,
    estado : String
})

const User = mongoose.model('user', userSchema);