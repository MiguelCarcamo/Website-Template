import React from 'react';
import { Grid, Typography, Paper,  } from '@mui/material';
import profileim from '../image/Perfil.png'
import logo from '../image/Logo.jpeg'

function Profile() {
    const AboutUs = [
        {
          title: 'Bessy M McCall',
          About: 'Somos una compañia corredora de seguros y de agentes profecionales dedicados para brindarles la mejor cobertura a los mejores precios con el mejor servicio.',
          Mision: 'Cumplir nuestros sueños brindando lo mejor de nosotros en nuestros servicios y asi inspirar a nuestros clientes a cumplir sus propios sueños.',
          Vision: 'Ser la mejor y unica opcion de agencias de servicios, gracias a nuestra excepcional voluntad de ayudar, educar e inspirar a nuestra comunidad.',
        },
    ]
  return (
    <Grid container>
      {/* Primera sección */}
      <Grid item xs={12} sm={12} md={5}>
        <img src={profileim} alt="Imagen" />
      </Grid>

      {/* Segunda sección */}
      <Grid item xs={12} sm={12} md={7}>
        <img width={'100%'} src={logo} alt="Imagen" />
        <Paper elevation={0} sx={{ p: 2, }}>
            <Typography variant="h6" gutterBottom>
                {AboutUs[0].title}
            </Typography>
            <br/>
            <Typography variant="h6">Nosotros</Typography>
            <Typography>{AboutUs[0].About}</Typography>
            <br/>
            <Typography variant="h6">Mision</Typography>
            <Typography>{AboutUs[0].Mision}</Typography>
            <br/>
            <Typography variant="h6">Vision</Typography>
            <Typography>{AboutUs[0].Vision}</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Profile