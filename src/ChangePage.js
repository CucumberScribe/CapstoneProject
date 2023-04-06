import React, { useState, useRef } from 'react';
import './App.css';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import { Link } from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';
import Scope from './scope.jpg';

import './ChangePage.css';


function ChangePage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";
  
    const imgStyles = {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    };
    
    return (
      <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId}/>
        <Menu open={open} setOpen={setOpen} id={menuId}/>
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>

        <div>
        <img style={imgStyles} src={Scope} alt="Scope it"/>
        </div>    


        <p className="textset">
          <Link to='*'>
            Log out here!
          </Link>
        </p>
        </div>
      </>
      </ThemeProvider>
    );
  }

export default ChangePage;