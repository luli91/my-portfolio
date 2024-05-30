import express from 'express';
import mongoose from "mongoose";
import { config } from 'dotenv';
import formRoutes from "./routes/form.routes.js";
import cors from 'cors';

config(); 

const app = express();
const PORT = process.env.PORT || 3000; 


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connected Successfully'))
    .catch((err) => console.error('DB Connection Error: ', err));


app.use(express.json())
app.use (express.urlencoded({extended: true}));

app.use(cors()); 

app.use('/api/form', formRoutes);


app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});


export default app;