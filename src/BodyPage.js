import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';

import { useLocation } from 'react-router-dom';

function BodyPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));

    const location = useLocation();
    const picture = location.state?.picture;

    const navigate = useNavigate();
	  const goBack = () => {
		  navigate('/feelings');
	  }
      const goNext = () =>{
        navigate('/wheels');
      }
    
      return (
        <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
            <div>
            <img style={{ width: 650, height: 250 }} src={Logo} alt="Paths program Image" />
            </div>
            <div>
            <img src={picture} alt="Selected Picture" />
            </div>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
      );
   
}

export default BodyPage;