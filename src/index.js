import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Questions from './QuestionPage';
import Feelings from './FeelingPage';
import Bodys from './BodyPage';
import Results from './ResultsPage';
import Wheels from './WheelsPage';
import Mads from './MadPage';
import MadsResults from './MadResultPage';
import Finals from './HappyPage';
import Changes from './ChangePage';
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
        <Route path="/bodys" element={ <Bodys/> } />
        <Route path="/results" element={ <Results/> }></Route>
        <Route path="/wheels"  element={ <Wheels/> } />
        <Route path="/mad"  element={ <Mads/> } />
        <Route path="/madresult"  element={ <MadsResults/> } />
        <Route path="/final"  element={ <Finals/> } />
        <Route path="/changes"  element={ <Changes/> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
