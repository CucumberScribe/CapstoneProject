import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate, Link} from 'react-router-dom';

import  Logo  from './paths-program-llc-logo.jpg';

import picture1 from './picture1forfeelings.jpg';
import picture2 from './picture2forfeelings.jpg';
import picture3 from './picture3forfeelings.jpg';
import picture4 from './picture4forfeelings.jpg';

import './FeelingPage.css';

function FeelingPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));

    const navigate = useNavigate();
	  const goBack = () => {
		  navigate('/questions');
	  }
    
    const [selectedPicture, setSelectedPicture] = useState(null);
    const handlePictureClick = (picture) => {
        setSelectedPicture(picture);
        navigate("/bodys");
    };

    const goNext = () =>{
      navigate('/bodys');
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
            <label>Which of these options would you say best describes yourself?</label>

            <div className="row">
                <img 
                src={picture1} 
                alt="Picture 1"  
                onClick={() => handlePictureClick('picture1')}
                />
                <img 
                src={picture2} 
                alt="Picture 2" 
                onClick={() => handlePictureClick('picture2')}
                />
            </div>
            <div className="row">
                <img 
                src={picture3}
                alt="Picture 3"  
                onClick={() => handlePictureClick('picture3')}/>
                <img 
                src={picture4} 
                alt="Picture 4" 
                onClick={() => handlePictureClick('picture4')}/>
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