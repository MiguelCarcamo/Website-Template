import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MainFeaturedPost from '../components/MainFeaturedPost';
import { Box } from '@mui/material';

import Home2 from '../image/Home.jpg';
import Cards from "../components/Card";

import saveimg from '../image/Seguros.jpeg'
import workimg from '../image/modelos-de-negocios-digitales.webp'
const mainFeaturedPost = {
    title: "MAVEL'S INSUREANCE",
    description:
        "Nuestros valores son la guía en función de la que se construye la cultura sustentable con los grupos de interés: accionistas, asegurados, colaboradores y comunidad.",
    image: Home2,
    imageText: 'main image description',
};

const TextCards = [
  {
    title : "Seguros",
    description: "Especializados en el seguro, cuya actividad económica consiste en producir el servicio de seguridad, cubriendo determinados riesgos económicos a las unidades económicas de producción y consumo.",
    imagen: saveimg,
  },
  {
    title : "Multiservicios",
    description: "Especializados en el seguro, cuya actividad económica consiste en producir el servicio de seguridad, cubriendo determinados riesgos económicos a las unidades económicas de producción y consumo.",
    imagen: workimg,
  } 
]

function Home() {
    return (
        <div>
            <MainFeaturedPost post={mainFeaturedPost}/>
            <Box textAlign="center" fontWeight="bold" m={2}>
              <Typography variant="h4" color="#E7282E" paragraph>
                  Agencia de Seguros y Multiservicios
              </Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center">
              {TextCards.map((post)=>(
                <Cards key={post.title} post={post} />
              ))}
            </Grid>
        </div>
    )
}

export default Home