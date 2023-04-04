import React, { useState, useRef } from 'react';
import './App.css';
import { GlobalStyles } from './global';
import { useOnClickOutside } from './hooks';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';

import { useLocation } from 'react-router-dom';


function MadPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const mad1 = searchParams.get('w1');
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
		  navigate(`/wheels?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}`);
	  }
    const goNext = () =>{
        navigate(`/madresult?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}&w1=${mad1}&w2=${selected}`);
    }

    const imgStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      };

    if(mad1 === 'a'){
        return(
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
                <label>Maybe one of these describes it better?</label>
                <button
                style={{ backgroundColor: selected === 'a' ? '#8B0000' : '#FF6E6E', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                onClick={() => handleButtonClick('a')}
                >
                Hurt
                </button>
                <button
                style={{ backgroundColor: selected === 'b' ? '#8B0000' : '#FF6E6E', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                onClick={() => handleButtonClick('b')}
                >
                Hostile 
                </button>
                <button
                style={{ backgroundColor: selected === 'c' ? '#8B0000' : '#FF6E6E', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('c')}
                >
                Angry
                </button>
                <button
                style={{ backgroundColor: selected === 'd' ? '#8B0000' : '#FF6E6E', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('d')}
                >
                Selfish
                </button>
                <button
                style={{ backgroundColor: selected === 'e' ? '#8B0000' : '#FF6E6E', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('e')}
                >
                Hateful
                </button>
                <button
                style={{ backgroundColor: selected === 'f' ? '#8B0000' : '#FF6E6E', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('f')}
                >
                Critical
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

    if(mad1 === 'b'){
        return(
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
                <label>Maybe one of these describes it better?</label>
                <button
                style={{ backgroundColor: selected === 'a' ? '#ff8c00' : '#FBB36B', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                onClick={() => handleButtonClick('a')}
                >
                Confused
                </button>
                <button
                style={{ backgroundColor: selected === 'b' ? '#ff8c00' : '#FBB36B', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                onClick={() => handleButtonClick('b')}
                >
                Rejected 
                </button>
                <button
                style={{ backgroundColor: selected === 'c' ? '#ff8c00' : '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('c')}
                >
                Helpless
                </button>
                <button
                style={{ backgroundColor: selected === 'd' ? '#ff8c00' : '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('d')}
                >
                Submissive
                </button>
                <button
                style={{ backgroundColor: selected === 'e' ? '#ff8c00' : '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('e')}
                >
                Insecure
                </button>
                <button
                style={{ backgroundColor: selected === 'f' ? '#ff8c00' : '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                onClick={() => handleButtonClick('f')}
                >
                Anxious
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

    if(mad1 === 'c'){
        return(
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
                    <label>Maybe one of these describes it better?</label>
                    <button
                    style={{ backgroundColor: selected === 'a' ? '#ffd700' : '#FFFF8C', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                    onClick={() => handleButtonClick('a')}
                    >
                    Excited
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'b' ? '#ffd700' : '#FFFF8C', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                    onClick={() => handleButtonClick('b')}
                    >
                    Sensuous
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'c' ? '#ffd700' : '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('c')}
                    >
                    Energetic
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'd' ? '#ffd700' : '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('d')}
                    >
                    Cheerful
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'e' ? '#ffd700' : '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('e')}
                    >
                    Creative
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'f' ? '#ffd700' : '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('f')}
                    >
                    Hopeful
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
    if(mad1 === 'd'){
        return(
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
                    <label>Maybe one of these describes it better?</label>
                    <button
                    style={{ backgroundColor: selected === 'a' ? '#7cfc00' : '#20CE00', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                    onClick={() => handleButtonClick('a')}
                    >
                    Aware
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'b' ? '#7cfc00' : '#20CE00', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                    onClick={() => handleButtonClick('b')}
                    >
                    Proud
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'c' ? '#7cfc00' : '#20CE00', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('c')}
                    >
                    Respected
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'd' ? '#7cfc00' : '#20CE00', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('d')}
                    >
                    Appreciated
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'e' ? '#7cfc00' : '#20CE00', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('e')}
                    >
                    Important
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'f' ? '#7cfc00' : '#20CE00', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('f')}
                    >
                    Faithful
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
    if(mad1 === 'e'){
        return(
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
                    <label>Maybe one of these describes it better?</label>
                    <button
                    style={{ backgroundColor: selected === 'a' ? '#0000cd' : '#6565FF', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                    onClick={() => handleButtonClick('a')}
                    >
                    Content
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'b' ? '#0000cd' : '#6565FF', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                    onClick={() => handleButtonClick('b')}
                    >
                    Thoughtful
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'c' ? '#0000cd' : '#6565FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('c')}
                    >
                    Intimate
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'd' ? '#0000cd' : '#6565FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('d')}
                    >
                    Loving
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'e' ? '#0000cd' : '#6565FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('e')}
                    >
                    Trusting
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'f' ? '#0000cd' : '#6565FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('f')}
                    >
                    Nurturing
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
    if(mad1 === 'f'){
        return(
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
                    <label>Maybe one of these describes it better?</label>
                    <button
                    style={{ backgroundColor: selected === 'a' ? '#c71585' : '#FF80FF', fontSize: '24px', padding: '70px', margin: '8px',width:'450px' }}
                    onClick={() => handleButtonClick('a')}
                    >
                    Guilty
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'b' ? '#c71585' : '#FF80FF', fontSize: '22px', padding: '50px', margin: '8px',width:'450px'   }}
                    onClick={() => handleButtonClick('b')}
                    >
                    Ashamed
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'c' ? '#c71585' : '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('c')}
                    >
                    Depressed
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'd' ? '#c71585' : '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('d')}
                    >
                    Lonely
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'e' ? '#c71585' : '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('e')}
                    >
                    Bored
                    </button>
                    <button
                    style={{ backgroundColor: selected === 'f' ? '#c71585' : '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px',width:'450px'   }}
                    onClick={() => handleButtonClick('f')}
                    >
                    Tired
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

export default MadPage;