import React, { useState, useEffect} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useParams  } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer';
import NotFoundPage from './NotFoundPage';

import Home from './Home';
import Service from "./Service";
import Profile from "../components/Profile";
import Contact from "../components/Contact";


function Main() {
    const sections = [
        { title: 'Home', url: '/Main/Home' },
        { title: 'About', url: '/Main/About' },
        { title: 'Service', url: '/Main/Service' },
        { title: 'Contact', url: '/Main/Contact' },
      ];
    const { ruta } = useParams();
    const [ruta2, setRuta2] = useState('');
    const [modo, setModo] = useState("light");
    const theme = createTheme({
        palette: {
        //   mode: 'dark',
            mode: modo,
        },
    });

    useEffect(() =>{
        if(ruta){
            let section = sections.find(item => item.title === ruta);
            if (section){
                setRuta2(ruta);
            }else{
                setRuta2("Home");
            }
        }else{
            setRuta2("Home");
        }
    }, [ruta])
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xxl" >
            <Header title="Blog" sections={sections} />
            {(ruta2)?
                {
                    'Home': <Home />,
                    'Service': <Service />,
                    'About': <Profile />,
                    'Contact': <Contact />,
                }[ruta2]
                : <NotFoundPage />
            }
        </Container>
        <Footer
            title="Contactos"
            description="Mavel´s Insurance & Multiservices "
            description2="Phone: 816-375-844 Fax: 314-788-7224 Email: bmccall@mavelinsurance.com"
            description3="3424 MERRIAM DR, SHAWNEE, KS 66203"
        />
        </ThemeProvider>
    )
}

export default Main