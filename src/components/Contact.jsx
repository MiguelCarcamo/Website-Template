import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al correo
    console.log('Datos del formulario:', { name, email, phone, message });
    // ... Código para enviar datos al correo ...
  };

  return (
    <iframe
          title="Google Map"
          width="100%"
          height="400"
          style={{ border: 0 }}
          src={`https://www.google.com/maps?q=3424+MERRIAM+DR,+SHAWNEE,+KS+66203&output=embed`}
          allowFullScreen
        />
  );
}

export default Contact;
