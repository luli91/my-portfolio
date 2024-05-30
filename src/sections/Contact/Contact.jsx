import styles from './ContactStyles.module.css'
import React from 'react';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Enviando datos al backend:', formData);
            await fetch('http://localhost:8080/api/form/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Datos enviados correctamente al backend');
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        
        }
    };
    
    return (
        <section id='contact' className={styles.container}>
            <h1 className='sectionTitle'>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input 
                    type="text" 
                    name='name'
                    id='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    required/>
                </div>
                <div className='formGroup'>
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input 
                    type="text" 
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    required/>
                </div>
                <div className='formGroup'>
                    <label htmlFor="mensaje" hidden>
                        Message
                    </label>
                    <textarea 
                    type="text" 
                    name='mensaje'
                    id='mensaje'
                    placeholder='Message'
                    value={formData.mensaje}
                    onChange={handleChange}
                    required>
                    </textarea>
                </div>
                <button className={styles.button} type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact