import Mensaje from '../models/form.model.js';
import { Router } from 'express';

const router = Router();


router.post('/insert', async (req, res) => {
    try {
        const { name, email, mensaje } = req.body;
        console.log('Datos recibidos del formulario:', { name, email, mensaje });

        const newMessage = new Mensaje({ name, email, mensaje });

        await newMessage.save();

        res.status(201).json({ message: 'Mensaje guardado correctamente' });
    } catch (error) {
        console.error('Error al guardar en la base de datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

export default router;
