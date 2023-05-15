import React from 'react'
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import FeaturedPost from '../components/FeaturedPost';
import Insurance from '../image/Seguros-comerciales.webp';
import Multiservices from '../image/Cuidado.webp';

import Design from '../image/diseno.webp';
import OpenD from '../image/open.webp';
import InsuranceC from '../image/seguro C.jpeg';
import InsuranceP from '../image/Seguros.jpeg';
import Notario from '../image/Abogados-y-Notarios.jpg';
import tras from '../image/traductores-de-ingles-a-espanol.png';

import constr from '../image/Construccion-y-remodelacion-de-inmuebles_Masaico.webp';

const featuredPosts2 = [
    {
        title: 'Aperturas de Negocios',
        description:
        'Especializados en el seguro, cuya actividad económica consiste en producir el servicio de seguridad, cubriendo determinados riesgos económicos a las unidades económicas de producción y consumo.',
        image: OpenD,
        imageLabel: 'Image Text',
        date : '',
    },
    {
        title: 'Diseños de presentacion',
        description:
        'Nos especializamos en ofrecer múltiples servicios a hogares y oficinas como es el caso de Interdomicilio. Nos encargamos de cuidado del paisaje y del césped, remodelaciones y construcciones.',
        image: Design,
        imageLabel: 'Image Text',
        date : '',
    },
    {
        title: 'Seguros Comerciales',
        description:
        'Especializados en el seguro, cuya actividad económica consiste en producir el servicio de seguridad, cubriendo determinados riesgos económicos a las unidades económicas de producción y consumo.',
        image: InsuranceC,
        imageLabel: 'Image Text',
        date : '',
    },
    {
        title: 'Seguros Personales',
        description:
        'Nos especializamos en ofrecer múltiples servicios a hogares y oficinas como es el caso de Interdomicilio. Nos encargamos de cuidado del paisaje y del césped, remodelaciones y construcciones.',
        image: InsuranceP,
        imageLabel: 'Image Text',
        date : '',
    },
    {
        title: 'Traducciones',
        description:
        'Nos especializamos en ofrecer múltiples servicios a hogares y oficinas como es el caso de Interdomicilio. Nos encargamos de cuidado del paisaje y del césped, remodelaciones y construcciones.',
        image: tras,
        imageLabel: 'Image Text',
        date : '',
    },
    {
        title: 'Notario',
        description:
        'Nos especializamos en ofrecer múltiples servicios a hogares y oficinas como es el caso de Interdomicilio. Nos encargamos de cuidado del paisaje y del césped, remodelaciones y construcciones.',
        image: Notario,
        imageLabel: 'Image Text',
        date : '',
    },
];
const featuredPosts3 = [
    {
        title: 'Cuidado del paisaje y del césped',
        description:
        'Especializados en el seguro, cuya actividad económica consiste en producir el servicio de seguridad, cubriendo determinados riesgos económicos a las unidades económicas de producción y consumo.',
        image: Multiservices,
        imageLabel: 'Image Text',
        date : '',
    },
    {
        title: 'Construccion y Remodelaciones',
        description:
        'Nos especializamos en ofrecer múltiples servicios a hogares y oficinas como es el caso de Interdomicilio. Nos encargamos de cuidado del paisaje y del césped, remodelaciones y construcciones.',
        image: constr,
        imageLabel: 'Image Text',
        date : '',
    },
]
function Service() {
  return (
    <>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
            >
            Servicios de Seguro
            </Typography>
        </Toolbar>
        <Grid container spacing={4}>
            {featuredPosts2.map((post) => (
            <FeaturedPost key={post.title} post={post} />
            ))}
        </Grid>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
            >
            Multiservicios
            </Typography>
        </Toolbar>
        <Grid container spacing={4}>
            {featuredPosts3.map((post) => (
            <FeaturedPost key={post.title} post={post} />
            ))}
        </Grid>
    </>
  )
}

export default Service