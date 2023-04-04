import React, { useState, useRef } from 'react';
import './App.css';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';

import { useLocation } from 'react-router-dom';


function MadResultPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const mad1 = searchParams.get('w1');
    const mad2 = searchParams.get('w2');
    const answer1 = searchParams.get('q1');
    const answer2 = searchParams.get('q2');
    const answer3 = searchParams.get('q3');
    const answer4 = searchParams.get('q4');
    const answer5 = searchParams.get('q5');
    const answer6 = searchParams.get('q6');



    const navigate = useNavigate();
	  const goBack = () => {
		  navigate(`/mad?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}&w1=${mad1}&w2=${mad2}`);
	  }
    const goNext = () =>{
        navigate(`/final?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}&w1=${mad1}&w2=${mad2}`);
    }

    const imgStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      };
    
    if(mad1 === 'a' && mad2 === 'a'){
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
                    <label>Results for feeling:</label>
                    <button
                    style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px',width:'450px'}}
                    >
                    MAD
                    </button>

                    <button
                    style={{ backgroundColor: '#FF6E6E', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                    >
                    Hurt
                    </button>
                    </div>
    
                </div>       
      
                  <div style={{ marginTop: '50rem', textAlign: 'center' }}>
                      <button onClick={goBack}>Back</button>	
                      <button onClick={goNext}>Next</button>
                  </div>	
            </>
            </ThemeProvider>
          );
    }
    
    if(mad1 === 'a' && mad2 === 'b'){
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
                    <label>Results for feeling:</label>
                    <button
                    style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px',width:'450px'}}
                    >
                    MAD
                    </button>

                    <button
                    style={{ backgroundColor:'#FF6E6E', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                    >
                    Hostile 
                    </button>
                    </div>
    
                </div>       
      
                  <div style={{ marginTop: '50rem', textAlign: 'center' }}>
                      <button onClick={goBack}>Back</button>	
                      <button onClick={goNext}>Next</button>
                  </div>	
            </>
            </ThemeProvider>
          );
    }

    
    

}

export default MadResultPage;