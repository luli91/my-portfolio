import mongoose from "mongoose";

const mensajeSchema = new mongoose.Schema({
    name: String,
    email: String,
    mensaje: String,
})

const Mensaje = mongoose.model('Mensaje', mensajeSchema);

export default Mensaje;