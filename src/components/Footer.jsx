import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mavelinsurance.com">
        www.mavelinsurance.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title, description2, description3 } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6}}>
      <Container maxWidth="xxl" sx={{background: '#408BD1', width: '100%', height:'240px'}}>
        <br/>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
          <Stack sx={{ justifyContent: "center" }} direction="row" spacing={1}>
            <IconButton onClick={()=>window.location.href='https://www.facebook.com/profile.php?id=100086279865474&mibextid=LQQJ4d'}>
              <FacebookIcon />
            </IconButton>
            <IconButton onClick={()=>window.location.href='https://instagram.com/mavelsinsurance?igshid=MjEwN2IyYWYwYw=='}>
              <InstagramIcon />
            </IconButton>
            <IconButton onClick={()=>window.location.href='https://api.whatsapp.com/send?phone=12819083174'}>
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description2}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description3}
        </Typography>
        <Copyright />
        
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;