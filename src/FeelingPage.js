import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';


import './FeelingPage.css';

function FeelingPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";
  
    useOnClickOutside(node, () => setOpen(false));

    const navigate = useNavigate();
	  const goBack = () => {
		  navigate('/questions');
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
      navigate(`/bodys?q1=${selected}`);
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
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Which of these options would you say best describes yourself?</label>

            <div className="row">
            <button
              style={{ backgroundColor: selected === 'a' ? '#6565FF' : '#C8C8FF', fontSize: '24px', padding: '50px', margin: '8px' }}
              onClick={() => handleButtonClick('a')}
            >
              Pleasant 
              Calm
            </button>
            <button
              style={{ backgroundColor: selected === 'b' ? '#FCB165' : '#FFE4C8', fontSize: '24px', padding: '50px', margin: '8px'  }}
              onClick={() => handleButtonClick('b')}
            >
              Pleasant 
              Agitated
            </button>
            </div>
            <div className="row">
            <button
              style={{ backgroundColor: selected === 'c' ? '#FFFF8C' : '#FFFFC8', fontSize: '24px', padding: '35px', margin: '10px'  }}
              onClick={() => handleButtonClick('c')}
            >
              Unpleasant 
              Calm
            </button>
            <button
              style={{ backgroundColor: selected === 'd' ? '#FF6E6E' : '#FFBEBE', fontSize: '24px', padding: '35px', margin: '10px'  }}
              onClick={() => handleButtonClick('d')}
            >
              UnPleasant 
              Agitated
            </button>
            </div>


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

export default FeelingPage;