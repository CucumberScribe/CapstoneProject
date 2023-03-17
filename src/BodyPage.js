import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';

import sleep from './sleep.jpg';

import { useLocation } from 'react-router-dom';

import './FeelingPage.css';

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
    
    const [selected, setSelected] = useState(null);
    const handleButtonClick = (option) => {
      if (selected === option) {
        setSelected(null); // deselect the option if it's already selected
      } else {
        setSelected(option); // select the new option
      }
    };

    const goNext = () =>{
      navigate(`/results?q1=${answer1}&q2=${selected}`);
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

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>How did you sleep?</label>
            <img src={sleep} alt="sleep image" />
            




            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
            </div>	
        </div>
      </>
      </ThemeProvider>
    );
  }

export default BodyPage;