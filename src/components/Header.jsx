import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../image/Logo.png'

function Header(props) {
  const { sections, title } = props;
  const navigate = useNavigate();

  return (
    <React.Fragment >
      <div style={{ backgroundColor: '#408BD1', height: '60px' }}></div>
      <div style={{ backgroundColor: '#E7282E', height: '25px' }}></div>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: '300px', height:'100px' }}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {sections.map((section) => (
            <Button
              color="inherit"
              key={section.title}
              variant="body2"
              onClick={() => navigate(section.url)}
              sx={{
                p: 1,
                flexShrink: 0,
                color: '#E7282E', // Cambia el color de los botones aquí
              }}
            >
              {section.title}
            </Button>
          ))}
        </div>
      </Toolbar>
      <div style={{ backgroundColor: '#E7282E', height: '25px' }}></div>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;