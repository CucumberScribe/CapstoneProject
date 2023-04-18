import React, { useState, useRef } from 'react';
import './App.css';
import { GlobalStyles } from './global';
import { useOnClickOutside } from './hooks';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './assets/Emozi.png';

import { useLocation } from 'react-router-dom';


function WheelsPage(){
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const answer1 = searchParams.get('q1');
    const answer2 = searchParams.get('q2');
    const answer3 = searchParams.get('q3');
    const answer4 = searchParams.get('q4');
    const answer5 = searchParams.get('q5');
    const answer6 = searchParams.get('q6');

    useOnClickOutside(node, () => setOpen(false));

    const [selected, setSelected] = useState(null);
    const handleButtonClick = (option) => {
      if (selected === option) {
        setSelected(null); // deselect the option if it's already selected
      } else {
        setSelected(option); // select the new option
      }
    };

    const navigate = useNavigate();
	  const goBack = () => {
		  navigate(`/results?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}`);
	  }
    const goNext = () =>{
        navigate(`/mad?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}&w1=${selected}`);
    }
    
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
  
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', color: 'black',fontSize: '20px'}}>
                  <div style={{margin: '1rem'}}>
                <label><h3>How are you feeling?</h3></label>
                </div>
                <div>
                <button
                style={{ backgroundColor: selected === 'a' ? '#8B0000' : '#FF0000', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                onClick={() => handleButtonClick('a')}
                >
                MAD
                </button>
                </div>
                <div>
                <button
                style={{ backgroundColor: selected === 'b' ? '#ff8c00' : '#ffa500', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                onClick={() => handleButtonClick('b')}
                >
                SCARED 
                </button>
                </div>
                <div>
                <button
                style={{ backgroundColor: selected === 'c' ? '#ffd700' : '#FFFF00', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('c')}
                >
                JOYFUL 
                </button>
                </div>
                <div>
                <button
                style={{ backgroundColor: selected === 'd' ? '#7cfc00' : '#00FF00', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('d')}
                >
                POWERFUL
                </button>
                </div>
                <div>
                <button
                style={{ backgroundColor: selected === 'e' ? '#0000cd' : '#0000FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('e')}
                >
                PEACEFUL
                </button>
                </div>
                <div>
                <button
                style={{ backgroundColor: selected === 'f' ? '#c71585' : '#800080', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('f')}
                >
                SAD
                </button>
                </div>
                </div>

            </div>       
  
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                  <button onClick={goBack}>Back</button>	
                  <button onClick={goNext}>Next</button>
              </div>

              <footer>
                <p>&reg;2023 LearningSEL, LLC | &copy;2023 Anna-Lisa Mackay, M.Ed. | Published and Distributed by PATHS Program LLC</p>
              </footer>
        </>
        </ThemeProvider>
      );
}

export default WheelsPage;
/* */