import React, { useState, useRef } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';
import Questions from './QuestionPage';
import Feelings from './FeelingPage';
import Bodys from './BodyPage';
import Results from './ResultsPage';
import Wheels from './WheelsPage';
import Mads from './MadPage';
import MadsResults from './MadResultPage';
import Finals from './HappyPage';
import Changes from './ChangePage';

import {Route,Routes, useNavigate} from 'react-router-dom';



import  Logo  from './paths-program-llc-logo.jpg';


function App() {



  return (
        <Routes>		
				<Route path="*" element={ <LoginPage/> } />
        <Route path="/questions" element={ <Questions/> } />
        <Route path="/feelings" element={ <Feelings/> } />
        <Route path="/bodys" element={ <Bodys/> } />
        <Route path="/results"  element={ <Results/> } />
        <Route path="/wheels"  element={ <Wheels/> } />
        <Route path="/mad"  element={ <Mads/> } />
        <Route path="/madresult"  element={ <MadsResults/> } />
        <Route path="/final"  element={ <Finals/> } />
        <Route path="/changes"  element={ <Changes/> } />
			  </Routes>


    
  );
  }

  function LoginPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const myLink = "https://pathsprogram.com/";
    
    function handleSubmit(event) {
      event.preventDefault();
  
      if (username === "runtian" && password === "123456") {
        navigate('/questions');
      } else {
        alert("Invalid username or password. Please try again.");
      }
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
              <img style={imgStyles} src={Logo} alt="Paths program" />
              </a>
              </div>
          </>
          
          <form onSubmit={handleSubmit}>
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black'}}>
          <h1 htmlFor="username" >Username:</h1>
          </div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ width: '350px', height: '100px',fontSize: '50px'}}
          />
          <br />
          <div style={{alignitems:'center', width: 200,  height: 100, color: 'black'}}>
          <h2 htmlFor="password">Password:</h2>
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ width: '350px', height: '100px',fontSize: '50px'}}
          />
          <br />
          <button type="submit" style={{fontSize: '16px', padding: '10px 20px',backgroundColor: 'orange' }}>Log in</button>
        </form>
        </ThemeProvider>
      );
  }

export default App;
