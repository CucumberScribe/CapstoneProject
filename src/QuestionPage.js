import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { Burger, Menu } from './components';

import {useNavigate} from 'react-router-dom';



import  Logo  from './paths-program-llc-logo.jpg';

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
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: ""
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
          <a href={myLink}>
          <img style={imgStyles} src={Logo} alt="Paths program" />
          </a>
          </div>
      </>

      <div style={{alignitems:'center', width: 200,  height: 100, color: 'black',fontSize: '20px'}}>
        <form>
          <label htmlFor="answer1">Where do you reside?</label>
          <input
            type="text"
            id="answer1"
            name="answer1"
            value={answers.answer1}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer2">When were your born?</label>
          <input
            type="text"
            id="answer2"
            name="answer2"
            value={answers.answer2}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer3">How old are you?</label>
          <input
            type="text"
            id="answer3"
            name="answer3"
            value={answers.answer3}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer4">Which school do you go to?</label>
          <input
            type="text"
            id="answer4"
            name="answer4"
            value={answers.answer4}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer5">What grade are you in?</label>
          <input
            type="text"
            id="answer5"
            name="answer5"
            value={answers.answer5}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer6">What is your gender identity?</label>
          <input
            type="text"
            id="answer6"
            name="answer6"
            value={answers.answer6}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer7">What ratial or ethnic group do you belong to?</label>
          <input
            type="text"
            id="answer7"
            name="answer7"
            value={answers.answer7}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer8">How many siblings do you have?</label>
          <input
            type="text"
            id="answer8"
            name="answer8"
            value={answers.answer8}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer9">What do you parents do? Mother: </label>
          <input
            type="text"
            id="answer9"
            name="answer9"
            value={answers.answer9}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
          <br />
          <label htmlFor="answer10">Father: </label>
          <input
            type="text"
            id="answer10"
            name="answer10"
            value={answers.answer10}
            onChange={handleAnswerChange}
            style={{ width: '350px', height: '50px',fontSize: '30px'}}
          />
        </form>
        	
        <button onClick={goNext}>Next</button>	
      </div>
      </ThemeProvider>
    );
  }
  export default QuestionPage;

  //<button onClick={goBack}>Back</button>