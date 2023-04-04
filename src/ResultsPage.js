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

function ResultsPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";
  
    useOnClickOutside(node, () => setOpen(false));

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const answer1 = searchParams.get('q1');
    const answer2 = searchParams.get('q2');
    const answer3 = searchParams.get('q3');
    const answer4 = searchParams.get('q4');
    const answer5 = searchParams.get('q5');
    const answer6 = searchParams.get('q6');


    const navigate = useNavigate();
	  const goBack = () => {
		  navigate('/bodys');
	  }
    const goNext = () =>{
        navigate(`/wheels?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}`);
    }
    
    const imgStyles = {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    };
    
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='a' && answer6 ==='a'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='a' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }                               
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='a' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='a' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='a' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='b' && answer6 ==='a'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='b' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='b' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='b' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='b' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }                                

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='c' && answer6 ==='a'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='c' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='c' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='c' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='c' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='d' && answer6 ==='a'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='d' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='d' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='d' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='d' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='e' && answer6 ==='a'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='e' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='e' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='e' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='a' && answer5 ==='e' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }


    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='a' && answer6 ==='a'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='a' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='a' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='a' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='a' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='b' && answer6 ==='a'){
        return(
          <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
            <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

            <button
              style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
            >
              Pleasant 
              Calm
            </button>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Sleeping Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Exercise Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
            <label>Healthy Eating Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;&#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
            <label>Drinking Water Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;&#9733;
            </span>
            </div>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Calmness Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>

            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
            </>
            </ThemeProvider>
          );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='b' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='b' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='b' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='b' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='c' && answer6 ==='a'){
        return(
          <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

            <button
              style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
            >
              Pleasant 
              Calm
            </button>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Sleeping Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Exercise Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
            <label>Healthy Eating Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;&#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
            <label>Drinking Water Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;&#9733;&#9733;
            </span>
            </div>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Calmness Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>

            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
            </>
            </ThemeProvider>
          );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='c' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='c' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='c' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='c' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='d' && answer6 ==='a'){
        return(
          <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
            </div>
            <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

            <button
              style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
            >
              Pleasant 
              Calm
            </button>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Sleeping Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Exercise Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
            <label>Healthy Eating Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;&#9733;
            </span>
            </div>
            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
            <label>Drinking Water Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;&#9733;&#9733;&#9733;
            </span>
            </div>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>Calmness Rating:</label>
            <span style={{ color: 'gold', fontSize: '32px'  }}>
              &#9733;
            </span>
            </div>

            <div style={{ marginTop: '20rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
            </>
            </ThemeProvider>
          );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='d' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='d' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='d' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='d' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='e' && answer6 ==='a'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='e' && answer6 ==='b'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='e' && answer6 ==='c'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='e' && answer6 ==='d'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }
    if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='b' && answer5 ==='e' && answer6 ==='e'){
      return(
        <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />
          <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Sleeping Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Exercise Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Healthy Eating Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;
          </span>
          </div>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
          <label>Drinking Water Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
          <label>Calmness Rating:</label>
          <span style={{ color: 'gold', fontSize: '32px'  }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          </div>

          <div style={{ marginTop: '20rem', textAlign: 'center' }}>
              <button onClick={goBack}>Back</button>	
              <button onClick={goNext}>Next</button>
          </div>
          </>
          </ThemeProvider>
        );
    }

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='a' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>          
          </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='a' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='a' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='a' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='a' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='b' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='b' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='b' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='b' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='b' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='c' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='c' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='c' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='c' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='c' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='d' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='d' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='d' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='d' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='d' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='e' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='e' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='e' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='e' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='c' && answer5 ==='e' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
                                  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='a' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='a' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='a' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='a' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='a' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='b' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='b' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='b' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='b' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='b' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='c' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='c' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='c' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='c' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='c' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='d' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='d' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='d' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='d' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='d' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='e' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='e' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='e' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='e' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='d' && answer5 ==='e' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='a' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='a' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='a' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='a' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='a' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='b' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='b' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='b' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='b' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='b' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='c' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='c' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='c' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='c' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='c' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='d' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='d' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='d' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='d' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='d' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='e' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='e' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='e' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='e' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='a' && answer4 ==='e' && answer5 ==='e' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='a' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='a' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}                               
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='a' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='a' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='a' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='b' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='b' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
      <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='b' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
      <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
      </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='b' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='b' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}                                

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='c' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='c' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='c' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='c' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='c' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='d' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='d' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='d' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='d' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='d' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='e' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='e' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='e' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='e' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='a' && answer5 ==='e' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='a' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='a' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='a' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='a' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='a' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='b' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='b' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='b' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='b' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='b' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='c' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='c' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='c' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='c' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='c' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='d' && answer6 ==='a'){
    return(
      <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
        </div>
        <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
        </div>

        <button
          style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
        >
          Pleasant 
          Calm
        </button>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Sleeping Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Exercise Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Healthy Eating Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;
        </span>
        </div>
        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
        <label>Drinking Water Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;&#9733;&#9733;&#9733;
        </span>
        </div>

        <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <label>Calmness Rating:</label>
        <span style={{ color: 'gold', fontSize: '32px'  }}>
          &#9733;
        </span>
        </div>

        <div style={{ marginTop: '20rem', textAlign: 'center' }}>
            <button onClick={goBack}>Back</button>	
            <button onClick={goNext}>Next</button>
        </div>
        </>
        </ThemeProvider>
      );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='d' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='d' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='d' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='d' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}

if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='e' && answer6 ==='a'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='e' && answer6 ==='b'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='e' && answer6 ==='c'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='e' && answer6 ==='d'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
if(answer1 === 'a' && answer2 ==='a' && answer3 ==='b' && answer4 ==='b' && answer5 ==='e' && answer6 ==='e'){
  return(
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
      <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
      </div>
      <div>
        <a href={myLink}>
        <img style={imgStyles} src={Logo} alt="Paths program" />
        </a>          
      </div>

      <button
        style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
      >
        Pleasant 
        Calm
      </button>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Sleeping Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Exercise Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Healthy Eating Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;
      </span>
      </div>
      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '15px'}}>
      <label>Drinking Water Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
      <label>Calmness Rating:</label>
      <span style={{ color: 'gold', fontSize: '32px'  }}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      </div>

      <div style={{ marginTop: '20rem', textAlign: 'center' }}>
          <button onClick={goBack}>Back</button>	
          <button onClick={goNext}>Next</button>
      </div>
      </>
      </ThemeProvider>
    );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*        
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
*/
   
}

export default ResultsPage;