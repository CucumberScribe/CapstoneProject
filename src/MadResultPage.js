import React, { useState, useRef } from 'react';
import './App.css';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import { useNavigate } from 'react-router-dom';

import Logo from './assets/Emozi.png';

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
  //const answer1 = searchParams.get('q1');
  //const answer2 = searchParams.get('q2');
  //const answer3 = searchParams.get('q3');
  //const answer4 = searchParams.get('q4');
  //const answer5 = searchParams.get('q5');
  //const answer6 = searchParams.get('q6');



  const navigate = useNavigate();
  const goBack = () => {
    navigate('/feelings');
  }
  const goNext = () => {
    navigate('/final');
  }

  const imgStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  };

  if (mad1 === 'a' && mad2 === 'a') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                MAD
              </button>

              <button
                style={{ backgroundColor: '#FF6E6E', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                Hurt
              </button>

            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'a' && mad2 === 'b') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                MAD
              </button>

              <button
                style={{ backgroundColor: '#FF6E6E', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Hostile
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'a' && mad2 === 'c') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                MAD
              </button>

              <button
                style={{ backgroundColor: '#FF6E6E', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Angry
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'a' && mad2 === 'd') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                MAD
              </button>

              <button
                style={{ backgroundColor: '#FF6E6E', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Selfish
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'a' && mad2 === 'e') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                MAD
              </button>

              <button
                style={{ backgroundColor: '#FF6E6E', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Hateful
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'a' && mad2 === 'f') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FF0000', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                MAD
              </button>

              <button
                style={{ backgroundColor: '#FF6E6E', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Critical
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }

  if (mad1 === 'b' && mad2 === 'a') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#ffa500', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                SCARED
              </button>

              <button
                style={{ backgroundColor: '#FBB36B', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                Confused
              </button>

            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'b' && mad2 === 'b') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#ffa500', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                SCARED
              </button>

              <button
                style={{ backgroundColor: '#FBB36B', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Rejected
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'b' && mad2 === 'c') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#ffa500', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                SCARED
              </button>

              <button
                style={{ backgroundColor: '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}>
                Helpless
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'b' && mad2 === 'd') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#ffa500', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                SCARED
              </button>

              <button
                style={{ backgroundColor: '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Submissive
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'b' && mad2 === 'e') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#ffa500', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                SCARED
              </button>

              <button
                style={{ backgroundColor: '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Insecure
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'b' && mad2 === 'f') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#ffa500', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                SCARED
              </button>

              <button
                style={{ backgroundColor: '#FBB36B', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Anxious
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }

  if (mad1 === 'c' && mad2 === 'a') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FFFF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                JOYFUL
              </button>

              <button
                style={{ backgroundColor: '#FFFF8C', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                Excited
              </button>

            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'c' && mad2 === 'b') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FFFF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                JOYFUL
              </button>

              <button
                style={{ backgroundColor: '#FFFF8C', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Sensuous
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'c' && mad2 === 'c') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FFFF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                JOYFUL
              </button>

              <button
                style={{ backgroundColor: '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Energetic
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'c' && mad2 === 'd') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FFFF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                JOYFUL
              </button>

              <button
                style={{ backgroundColor: '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Cheerful
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'c' && mad2 === 'e') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FFFF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                JOYFUL
              </button>

              <button
                style={{ backgroundColor: '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Creative
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'c' && mad2 === 'f') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#FFFF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                JOYFUL
              </button>

              <button
                style={{ backgroundColor: '#FFFF8C', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Hopeful
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }

  if (mad1 === 'd' && mad2 === 'a') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#00FF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                POWERFUL
              </button>

              <button
                style={{ backgroundColor: '#20CE00', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                Aware
              </button>

            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'd' && mad2 === 'b') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#00FF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                POWERFUL
              </button>

              <button
                style={{ backgroundColor: '#20CE00', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Proud
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'd' && mad2 === 'c') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#00FF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                POWERFUL
              </button>

              <button
                style={{ backgroundColor: '#20CE00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Respected
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'd' && mad2 === 'd') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#00FF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                POWERFUL
              </button>

              <button
                style={{ backgroundColor: '#20CE00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Appreciated
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'd' && mad2 === 'e') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#00FF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                POWERFUL
              </button>

              <button
                style={{ backgroundColor: '#20CE00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Important
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'd' && mad2 === 'f') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#00FF00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                POWERFUL
              </button>

              <button
                style={{ backgroundColor: '#20CE00', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Faithful
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }

  if (mad1 === 'e' && mad2 === 'a') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#0000FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                PEACEFUL
              </button>

              <button
                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                Content
              </button>

            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'e' && mad2 === 'b') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#0000FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                PEACEFUL
              </button>

              <button
                style={{ backgroundColor: '#6565FF', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Thoughtful
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'e' && mad2 === 'c') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#0000FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                PEACEFUL
              </button>

              <button
                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Intimate
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'e' && mad2 === 'd') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#0000FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                PEACEFUL
              </button>

              <button
                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Loving
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'e' && mad2 === 'e') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#0000FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                PEACEFUL
              </button>

              <button
                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Trusting
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'e' && mad2 === 'f') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#0000FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                PEACEFUL
              </button>

              <button
                style={{ backgroundColor: '#6565FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Nurturing
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }

  if (mad1 === 'f' && mad2 === 'a') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#800080', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                SAD
              </button>

              <button
                style={{ backgroundColor: '#FF80FF', fontSize: '24px', padding: '70px', margin: '8px', width: '450px' }}
              >
                Guilty
              </button>

            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'f' && mad2 === 'b') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#800080', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                SAD
              </button>

              <button
                style={{ backgroundColor: '#FF80FF', fontSize: '22px', padding: '50px', margin: '8px', width: '450px' }}
              >
                Ashamed
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'f' && mad2 === 'c') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#800080', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                SAD
              </button>

              <button
                style={{ backgroundColor: '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Depressed
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'f' && mad2 === 'd') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#800080', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                SAD
              </button>

              <button
                style={{ backgroundColor: '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Lonely
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'f' && mad2 === 'e') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#800080', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                SAD
              </button>

              <button
                style={{ backgroundColor: '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Bored
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }
  if (mad1 === 'f' && mad2 === 'f') {
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
            </header>

            <div style={{ alignitems: 'center', width: 200, height: 100, color: 'black', fontSize: '20px' }}>
              <label>Results for feeling:</label>
              <button
                style={{ backgroundColor: '#800080', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                SAD
              </button>

              <button
                style={{ backgroundColor: '#FF80FF', fontSize: '24px', padding: '35px', margin: '10px', width: '450px' }}
              >
                Tired
              </button>
            </div>

          </div>

          <div style={{ marginTop: '40rem', textAlign: 'center' }}>
            <button onClick={goNext} style={{ backgroundColor: '#20CE00', padding: '30px', margin: '8px', width: '150px' }}>Submit</button>
            <button onClick={goBack} style={{ backgroundColor: '#FF6E6E', padding: '30px', margin: '8px', width: '150px' }}>Start Again</button>
          </div>
        </>
      </ThemeProvider>
    );
  }


}

export default MadResultPage;