import React, { useState, useRef } from 'react';
import './App.css';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import { Link } from 'react-router-dom';

import  Logo  from './assets/Emozi.png';
import Scope from './assets/scope.jpg';

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
        
        <header>
          <img style={imgStyles} src={Logo} alt="Paths program" />
        </header>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img style={{width: '20%', height: 'auto', minWidth: '440px'}} src={Scope} alt="Scope it"/>
        </div>    


        <p className="textset">
          <Link to='*'>
            Log out here!
          </Link>
        </p>
        </div>

        <footer>
          <p>&reg;2023 LearningSEL, LLC | &copy;2023 Anna-Lisa Mackay, M.Ed. | Published and Distributed by PATHS Program LLC</p>
        </footer>
      </>
      </ThemeProvider>
    );
  }

export default ChangePage;