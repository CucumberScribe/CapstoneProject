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
    const searchParams = new URLSearchParams(location.search);
    const answer1 = searchParams.get('q1');

    const navigate = useNavigate();
	  const goBack = () => {
		  navigate('/feelings');
	  }
      const goNext = () =>{
        navigate('/wheels');
      }
    
    switch(answer1){
        case 'a':
          return(
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

            <button
              style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
            >
              Pleasant 
              Calm
            </button>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
          ); 
        
        
        case 'b':
          return(
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

            <button
              style={{ backgroundColor:'#FCB165', fontSize: '24px', padding: '50px', margin: '8px'  }}>
              Pleasant 
              Agitated
            </button>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
          );

        case 'c':
          return(
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

            <button
              style={{ backgroundColor:'#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px'  }}>
              Pleasant 
              Agitated
            </button>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
          );

        case 'd':
          return(
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

            <button
              style={{ backgroundColor:'#FF6E6E', fontSize: '24px', padding: '35px', margin: '10px'  }}>
              Pleasant 
              Agitated
            </button>
            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
        </>
        </ThemeProvider>
          );
    }
   
}

export default BodyPage;