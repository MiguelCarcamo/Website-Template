import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';

import Liabilty from '../image/ldiapril19_hero.webp';
import Home2 from '../image/Home.jpg';
import Insurance from '../image/Seguros-comerciales.webp';
import Multiservices from '../image/Cuidado.webp';

const mainFeaturedPost = {
    title: "MAVEL'S INSUREANCE",
    description:
        "Nuestros valores son la guía en función de la que se construye la cultura sustentable con los grupos de interés: accionistas, asegurados, colaboradores y comunidad.",
    image: Home2,
    imageText: 'main image description',
    linkText: 'El poder para crear un futuro mejor está contenido en el momento presente: Creas un buen futuro creando un buen presente. (Eckhart Tolle)',
};
  
const featuredPosts = [
    {
      title: 'Seguros',
      date: 'Nov 12',
      description:
        'Especializados en el seguro, cuya actividad económica consiste en producir el servicio de seguridad, cubriendo determinados riesgos económicos a las unidades económicas de producción y consumo.',
      image: Insurance,
      imageLabel: 'Image Text',
    },
    {
      title: 'Multiservicios',
      date: 'Nov 11',
      description:
        'Nos especializamos en ofrecer múltiples servicios a hogares y oficinas como es el caso de Interdomicilio. Nos encargamos de cuidado del paisaje y del césped, remodelaciones y construcciones.',
      image: Multiservices,
      imageLabel: 'Image Text',
    },
];

function Home(props) {
    const { pass } = props;
    return (
        <div>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Typography variant="h5" color="inherit" paragraph>
                Servicios
            </Typography>
            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
        </div>
    )
}

export default Home