import React, { useState, useRef } from 'react';
import './App.css';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import { Link } from 'react-router-dom';

import  Logo  from './assets/Emozi.png';

import Bye from './assets/bye.jpg';

import './HappyPage.css';

function FinalPage() {
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
      
        <div className="question-page">
        <h2 className="question-heading">Having trouble?</h2>
        <p className="go-to-learning">
        <Link to="/changes" className="underline">
          Go to learning:
        </Link>
        </p>
        <p className="textset">
          Thank you very much for checking in! We hope to see you again!
        </p>
          <div  className="imagesize" >
          <img src={Bye} alt="Bye"/>
          </div>
        <p className="textset">
          <Link to='*'>
            Log out here!
          </Link>
        </p>
        </div>

        </div>

        <footer>
          <p>&reg;2023 LearningSEL, LLC | &copy;2023 Anna-Lisa Mackay, M.Ed. | Published and Distributed by PATHS Program LLC</p>
        </footer>
        
      </>
      </ThemeProvider>
    );
  }

export default FinalPage;