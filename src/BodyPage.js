import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';

import  Logo  from './assets/Emozi.png';

import sleep from './assets/sleep.jpg';
import exercise from './assets/exercise.jpg';
import health from './assets/health.jpg';
import water from './assets/water.jpg';
import stress from './assets/stress.jpg';

import { useLocation } from 'react-router-dom';

import './FeelingPage.css';


function BodyPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";
  
    useOnClickOutside(node, () => setOpen(false));

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const answer1 = searchParams.get('q1');

    const navigate = useNavigate();
	  const goBack = () => {
		  navigate('/feelings');
	  }
    
    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);
    const [selected3, setSelected3] = useState(null);
    const [selected4, setSelected4] = useState(null);
    const [selected5, setSelected5] = useState(null);
    const handleButtonClick1 = (option) => {
      if (selected1 === option) {
        setSelected1(null); // deselect the option if it's already selected
      } else {
        setSelected1(option); // select the new option
      }
    };

    const handleButtonClick2 = (option) => {
      if (selected2 === option) {
        setSelected2(null); // deselect the option if it's already selected
      } else {
        setSelected2(option); // select the new option
      }
    };

    const handleButtonClick3 = (option) => {
      if (selected3 === option) {
        setSelected3(null); // deselect the option if it's already selected
      } else {
        setSelected3(option); // select the new option
      }
    };

    const handleButtonClick4 = (option) => {
      if (selected4 === option) {
        setSelected4(null); // deselect the option if it's already selected
      } else {
        setSelected4(option); // select the new option
      }
    };

    const handleButtonClick5 = (option) => {
      if (selected5 === option) {
        setSelected5(null); // deselect the option if it's already selected
      } else {
        setSelected5(option); // select the new option
      }
    };

    const goNext = () =>{
      navigate(`/results?q1=${answer1}&q2=${selected1}&q3=${selected2}&q4=${selected3}&q5=${selected4}&q6=${selected5}`);
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
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <div>
          
          <header>
            <img style={imgStyles} src={Logo} alt="Paths program"/>
          </header>
          
            <div style={{display: 'grid', alignitems:'center', justifyContent: 'center', height: '100%', color: 'black',fontSize: '20px'}}>
            <label>How did you sleep?</label>
            <img src={sleep} alt="sleep" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'1'}
                defaultChecked={selected1 === '1'}
                onClick={() => handleButtonClick1('1')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'2'}
                defaultChecked={selected1 === '2'}
                onClick={() => handleButtonClick1('2')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'3'}
                defaultChecked={selected1 === '3'}
                onClick={() => handleButtonClick1('3')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'4'}
                defaultChecked={selected1 === '4'}
                onClick={() => handleButtonClick1('4')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'5'}
                defaultChecked={selected1 === '5'}
                onClick={() => handleButtonClick1('5')}
                />
                </label>
              </form>
            </div>

            <label>What does exercise look like for you?</label>
            <img src={exercise} alt="exercise" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'1'}
                defaultChecked={selected2 === '1'}
                onClick={() => handleButtonClick2('1')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'2'}
                defaultChecked={selected2 === '2'}
                onClick={() => handleButtonClick2('2')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'3'}
                defaultChecked={selected2 === '3'}
                onClick={() => handleButtonClick2('3')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'4'}
                defaultChecked={selected2 === '4'}
                onClick={() => handleButtonClick2('4')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'5'}
                defaultChecked={selected2 === '5'}
                onClick={() => handleButtonClick2('5')}
                />
                </label>
              </form>
            </div>


            <label>How health have you been eating?</label>
            <img src={health} alt="health" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'1'}
                defaultChecked={selected3 === '1'}
                onClick={() => handleButtonClick3('1')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'2'}
                defaultChecked={selected3 === '2'}
                onClick={() => handleButtonClick3('2')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'3'}
                defaultChecked={selected3 === '3'}
                onClick={() => handleButtonClick3('3')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'4'}
                defaultChecked={selected3 === '4'}
                onClick={() => handleButtonClick3('4')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'5'}
                defaultChecked={selected3 === '5'}
                onClick={() => handleButtonClick3('5')}
                />
                </label>
              </form>
            </div>

            <label>How much water have you been drinking?</label>
            <img src={water} alt="water" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'1'}
                defaultChecked={selected4 === '1'}
                onClick={() => handleButtonClick4('1')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'2'}
                defaultChecked={selected4 === '2'}
                onClick={() => handleButtonClick4('2')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'3'}
                defaultChecked={selected4 === '3'}
                onClick={() => handleButtonClick4('3')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'4'}
                defaultChecked={selected4 === '4'}
                onClick={() => handleButtonClick4('4')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'5'}
                defaultChecked={selected4 === '5'}
                onClick={() => handleButtonClick4('5')}
                />
                </label>
              </form>
            </div>

            <label>In general, how stress are you feeling?</label>
            <img src={stress} alt="stress" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'1'}
                defaultChecked={selected5 === '1'}
                onClick={() => handleButtonClick5('1')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'2'}
                defaultChecked={selected5 === '2'}
                onClick={() => handleButtonClick5('2')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'3'}
                defaultChecked={selected5 === '3'}
                onClick={() => handleButtonClick5('3')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'4'}
                defaultChecked={selected5 === '4'}
                onClick={() => handleButtonClick5('4')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'5'}
                defaultChecked={selected5 === '5'}
                onClick={() => handleButtonClick5('5')}
                />
                </label>
              </form>
            </div>


            

            <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                <button onClick={goBack}>Back</button>	
                <button onClick={goNext}>Next</button>
            </div>
            </div>	
        </div>

        <footer>
          <p>&reg;2023 LearningSEL, LLC | &copy;2023 Anna-Lisa Mackay, M.Ed. | Published and Distributed by PATHS Program LLC</p>
        </footer>
      </>
      </ThemeProvider>
    );
  }

export default BodyPage;