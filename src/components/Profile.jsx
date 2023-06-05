import React from 'react';
import { Grid, Paper, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material'
import profileim from '../image/Perfil.png'
import logo from '../image/Logo.png'

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
    <Grid container sx={{backgroundColor: '#5e7991'}}>
      {/* Primera sección */}
      <Grid item xs={12} sm={12} md={5}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img src={profileim} alt="Imagen" style={{ borderRadius: '50%', width: '70%' }} />
        </Box>
      </Grid>

      {/* Segunda sección */}
      <Grid item xs={12} sm={12} md={7} sx={{backgroundColor:'#202b36'}}>
        <img width={'100%'} src={logo} alt="Imagen" />
        <Paper elevation={0} sx={{ p: 2, backgroundColor:'#202b36' }}>
          <Accordion sx={{backgroundColor:'#408BD1'}}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6" gutterBottom>
                {AboutUs[0].title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{AboutUs[0].About}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{backgroundColor:'#408BD1'}}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Nosotros</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{AboutUs[0].About}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{backgroundColor:'#408BD1'}}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Mision</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{AboutUs[0].Mision}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{backgroundColor:'#408BD1'}}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Vision</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{AboutUs[0].Vision}</Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Profile