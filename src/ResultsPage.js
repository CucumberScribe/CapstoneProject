import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './assets/Emozi.png';

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

    const stars1=[];
    const stars2=[];
    const stars3=[];
    const stars4=[];
    const stars5=[];


    const navigate = useNavigate();
	  const goBack = () => {
		  navigate(`/bodys?q1=${answer1}`);
	  }
    const goNext = () =>{
        navigate(`/wheels?q1=${answer1}&q2=${answer2}&q3=${answer3}&q4=${answer4}&q5=${answer5}&q6=${answer6}`);
    }
    
    const imgStyles = {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    };
    
    stars1.push(<span style={{ color: 'gold', fontSize: '32px'  }} key="{question1}">{'★'.repeat(answer2)}</span>);
    stars2.push(<span style={{ color: 'gold', fontSize: '32px'  }} key="{question2}">{'★'.repeat(answer3)}</span>);
    stars3.push(<span style={{ color: 'gold', fontSize: '32px'  }} key="{question3}">{'★'.repeat(answer4)}</span>);
    stars4.push(<span style={{ color: 'gold', fontSize: '32px'  }} key="{question4}">{'★'.repeat(answer5)}</span>);
    stars5.push(<span style={{ color: 'gold', fontSize: '32px'  }} key="{question5}">{'★'.repeat(answer6)}</span>);

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
          
          <header>
            <img style={imgStyles} src={Logo} alt="Paths program" />
          </header>
           
          </div>
          <div style={{display: 'flex', alignitems:'center', justifyContent: 'center', height: '100%',}}>
          <button
            style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '50px', margin: '8px' }}
          >
            Pleasant 
            Calm
          </button>
          </div>
          <div style={{ display: "flex", alignitems:'center', justifyContent: 'center', height: '100%', marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}>
            <label key="{question1}">Sleeping Rating:{stars1}</label>
          </div>
          <div style={{ display: "flex", alignitems:'center', justifyContent: 'center', height: '100%', marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}>
            <label key="{question2}">Exercise Rating:{stars2}</label>
          </div>
          <div style={{ display: "flex", alignitems:'center', justifyContent: 'center', height: '100%', marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}>
            <label key="{question3}">Healthy Eating Rating:{stars3}</label>
          </div>
          <div style={{ display: "flex", alignitems:'center', justifyContent: 'center', height: '100%', marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}>
            <label key="{question4}">Drinking Water Rating:{stars4}</label>
          </div>
          <div style={{ display: "flex", alignitems:'center', justifyContent: 'center', height: '100%', marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}>
            <label key="{question5}">Calmness Rating:{stars5}</label>
          </div>
          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
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
            <a href={myLink}>
            <img style={imgStyles} src={Logo} alt="Paths program" />
            </a>          
            </div>
  
            <button
              style={{ backgroundColor:'#FCB165', fontSize: '24px', padding: '50px', margin: '8px'  }}>
              Pleasant 
              Agitated
            </button>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Sleeping Rating:{stars1}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Exercise Rating:{stars2}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Healthy Eating Rating:{stars3}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Drinking Water Rating:{stars4}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Calmness Rating:{stars5}</label></div>
  
  
            <div style={{ marginTop: '5rem', textAlign: 'center' }}>
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
            <a href={myLink}>
            <img style={imgStyles} src={Logo} alt="Paths program" />
            </a>          
            </div>
  
            <button
              style={{ backgroundColor:'#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px'  }}>
              Unpleasant 
              Calm
            </button>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Sleeping Rating:{stars1}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Exercise Rating:{stars2}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Healthy Eating Rating:{stars3}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Drinking Water Rating:{stars4}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Calmness Rating:{stars5}</label></div>
  
  
            <div style={{ marginTop: '5rem', textAlign: 'center' }}>
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
            <a href={myLink}>
            <img style={imgStyles} src={Logo} alt="Paths program" />
            </a>          
            </div>
            <button
              style={{ backgroundColor:'#FF6E6E', fontSize: '24px', padding: '35px', margin: '10px'  }}>
              UnPleasant 
              Agitated
            </button>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Sleeping Rating:{stars1}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Exercise Rating:{stars2}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Healthy Eating Rating:{stars3}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Drinking Water Rating:{stars4}</label></div>
            <div style={{ display: "flex",marginLeft: "20px", flexDirection: "row",fontSize: '20px',color:'black'}}><label>Calmness Rating:{stars5}</label></div> 
            <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>

            <footer>
              <p>&reg;2023 LearningSEL, LLC | &copy;2023 Anna-Lisa Mackay, M.Ed. | Published and Distributed by PATHS Program LLC</p>
            </footer>
            </>
            </ThemeProvider>
        );
      default:
          break;
    }

}

export default ResultsPage;