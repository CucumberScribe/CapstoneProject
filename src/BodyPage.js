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
import exercise from './exercise.jpg';
import health from './health.jpg';
import water from './water.jpg';
import stress from './stress.jpg';

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
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program"/>
          </a>

            <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
            <label>How did you sleep?</label>
            <img src={sleep} alt="sleep image" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'a'}
                defaultChecked={selected1 === 'a'}
                onClick={() => handleButtonClick1('a')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'b'}
                defaultChecked={selected1 === 'b'}
                onClick={() => handleButtonClick1('b')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'c'}
                defaultChecked={selected1 === 'c'}
                onClick={() => handleButtonClick1('c')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'d'}
                defaultChecked={selected1 === 'd'}
                onClick={() => handleButtonClick1('d')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'e'}
                defaultChecked={selected1 === 'e'}
                onClick={() => handleButtonClick1('e')}
                />
                </label>
              </form>
            </div>

            <label>What does exercise look like for you?</label>
            <img src={exercise} alt="exercise image" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'a'}
                defaultChecked={selected2 === 'a'}
                onClick={() => handleButtonClick2('a')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'b'}
                defaultChecked={selected2 === 'b'}
                onClick={() => handleButtonClick2('b')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'c'}
                defaultChecked={selected2 === 'c'}
                onClick={() => handleButtonClick2('c')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'d'}
                defaultChecked={selected2 === 'd'}
                onClick={() => handleButtonClick2('d')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'e'}
                defaultChecked={selected2 === 'e'}
                onClick={() => handleButtonClick2('e')}
                />
                </label>
              </form>
            </div>


            <label>How health have you been eating?</label>
            <img src={health} alt="health image" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'a'}
                defaultChecked={selected3 === 'a'}
                onClick={() => handleButtonClick3('a')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'b'}
                defaultChecked={selected3 === 'b'}
                onClick={() => handleButtonClick3('b')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'c'}
                defaultChecked={selected3 === 'c'}
                onClick={() => handleButtonClick3('c')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'d'}
                defaultChecked={selected3 === 'd'}
                onClick={() => handleButtonClick3('d')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'e'}
                defaultChecked={selected3 === 'e'}
                onClick={() => handleButtonClick3('e')}
                />
                </label>
              </form>
            </div>

            <label>How much water have you been drinking?</label>
            <img src={water} alt="water image" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'a'}
                defaultChecked={selected4 === 'a'}
                onClick={() => handleButtonClick4('a')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'b'}
                defaultChecked={selected4 === 'b'}
                onClick={() => handleButtonClick4('b')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'c'}
                defaultChecked={selected4 === 'c'}
                onClick={() => handleButtonClick4('c')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'d'}
                defaultChecked={selected4 === 'd'}
                onClick={() => handleButtonClick4('d')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'e'}
                defaultChecked={selected4 === 'e'}
                onClick={() => handleButtonClick4('e')}
                />
                </label>
              </form>
            </div>

            <label>In general, how stress are you feeling?</label>
            <img src={stress} alt="stress image" />
            <div>
              <form style={{ display: 'flex', alignItems: 'center'}}>
                <label>
                <input
                type="radio"
                name="color"
                value={'a'}
                defaultChecked={selected5 === 'a'}
                onClick={() => handleButtonClick5('a')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'b'}
                defaultChecked={selected5 === 'b'}
                onClick={() => handleButtonClick5('b')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'c'}
                defaultChecked={selected5 === 'c'}
                onClick={() => handleButtonClick5('c')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'d'}
                defaultChecked={selected5 === 'd'}
                onClick={() => handleButtonClick5('d')}
                style={{ marginRight: '80px' }}
                />
                </label>

                <label>
                <input
                type="radio"
                name="color"
                value={'e'}
                defaultChecked={selected5 === 'e'}
                onClick={() => handleButtonClick5('e')}
                />
                </label>
              </form>
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

export default BodyPage;