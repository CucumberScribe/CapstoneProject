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

import { Route, Routes, useNavigate } from 'react-router-dom';



import Logo from './assets/Emozi.png';


function App() {



  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/feelings" element={<Feelings />} />
      <Route path="/bodys" element={<Bodys />} />
      <Route path="/results" element={<Results />} />
      <Route path="/wheels" element={<Wheels />} />
      <Route path="/mad" element={<Mads />} />
      <Route path="/madresult" element={<MadsResults />} />
      <Route path="/final" element={<Finals />} />
      <Route path="/changes" element={<Changes />} />
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
        <header>
          <a href={myLink}>
            <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>
        </header>
      </>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={handleSubmit}>
          <div style={{ alignitems: 'center', color: 'black' }}>
            <h3 htmlFor="username" >Username:</h3>
          
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
            <h3 htmlFor="password">Password:</h3>
          
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          </div>
          <br />
          <button type="submit" id="submit" style={{ fontSize: '1.5em', marginBottom: '40px' }}>Log in</button>
        </form>
      </fieldset>

      <footer>
        <p>&reg;2023 LearningSEL, LLC | &copy;2023 Anna-Lisa Mackay, M.Ed. | Published and Distributed by PATHS Program LLC</p>
      </footer>
      
    </ThemeProvider>
  );
}

export default App;
