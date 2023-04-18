import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';



import  Logo  from './assets/Emozi.png';

function QuestionPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    const myLink = "https://pathsprogram.com/";
  
    useOnClickOutside(node, () => setOpen(false));

    const [answers, setAnswers] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: ""
      });

    /*useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("answers"));
        if (storedAnswers) {
            setAnswers(storedAnswers);
        }
    }, []);*/

    const handleAnswerChange = (event) => {
        setAnswers({ ...answers, [event.target.name]: event.target.value });
      };

    const navigate = useNavigate();
	  /*const goBack = () => {
		  navigate('/');
	  }*/

    const goNext = () =>{
      localStorage.setItem("answers", JSON.stringify(answers));
      navigate('/feelings', {answers});
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
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </header>
          
          
          </div>
      </>
      <div style={{alignitems:'center', color: 'black'}}>
        <form>
          <fieldset>
            <legend>Who are you?</legend>

            <label htmlFor="answer1"><h3>First Name:</h3></label>
            <input
            type="text"
            id="answer1"
            name="answer1"
            value={answers.answer1}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px'}}
            />

            <label htmlFor="answer2"><h3>Last Name:</h3></label>
            <input
            type="text"
            id="answer2"
            name="answer2"
            value={answers.answer2}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px'}}
            />

            <label htmlFor="answer3"><h3>What is your Email?</h3></label>
            <input
            type="text"
            id="answer3"
            name="answer3"
            value={answers.answer3}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px'}}
            />
          </fieldset>

          <fieldset>
            <legend>Tell Me About Yourself</legend>
            
            <label htmlFor="answer4"><h3>How old are you?</h3></label>
            <input
            type="text"
            id="answer4"
            name="answer4"
            value={answers.answer4}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px'}}
            />

            <label htmlFor="answer5"><h3>What school do you go to?</h3></label>
            <input
            type="text"
            id="answer5"
            name="answer5"
            value={answers.answer5}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px'}}
            />

            <label htmlFor="answer6"><h3>What grade are you in?</h3></label>
            <input
            type="text"
            id="answer6"
            name="answer6"
            value={answers.answer6}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px'}}
            />

            <label htmlFor="answer7"><h3>What is your gender identity?</h3></label>
            <input
            type="text"
            id="answer7"
            name="answer7"
            value={answers.answer7}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px'}}
            />
          </fieldset>
        </form>
        	
        <div style={{ alignitems: 'center' }}>
          <button type="submit" id="submit" style={{ fontSize: '1.5em' }} onClick={goNext}>Submit</button>
        </div>

        <footer>
          <p>&reg;2023 LearningSEL, LLC | &copy;2023 Anna-Lisa Mackay, M.Ed. | Published and Distributed by PATHS Program LLC</p>
        </footer>

      </div>


      

      
      </ThemeProvider>
      
    );
  }
  export default QuestionPage;

  //<button onClick={goBack}>Back</button>