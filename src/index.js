import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Questions from './QuestionPage';
import Feelings from './FeelingPage';
import Bodys from './BodyPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="*" element={ <App /> }></Route>
        <Route path="/questions" element={ <Questions /> }></Route>
        <Route path="/feelings" element={ <Feelings /> }></Route>
        <Route path="/bodys" element={ <Bodys/> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
