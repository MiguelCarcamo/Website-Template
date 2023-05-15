import React from 'react';
import { Grid, Typography, Paper,  } from '@mui/material';
import logo from '../image/contactanos1.png'

function Contact() {
  return (
    <Grid container>
    {/* Primera sección */}
    <Grid item xs={12} sm={12} md={4}>
      <img src={logo} alt="Imagen" />
    </Grid>

    {/* Segunda sección */}
    <Grid item xs={12} sm={12} md={8}>
      <Paper elevation={0} sx={{ p: 2, }}>
          <Typography variant="h6" gutterBottom>
              Contactanos
          </Typography>
          <br/>
          <Typography variant="h6">Facebook</Typography>
          <br/>
          <Typography variant="h6">Instagram</Typography>
          <br/>
          <Typography variant="h6">Whatsapp</Typography>
      </Paper>
    </Grid>
  </Grid>
  )
}

export default Contact