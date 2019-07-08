import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/litera/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Registration from './pages/registration/registration';
import Login from './pages/login/login';
import AboutServiceBase from './pages/about-service/about-service-base/about-service-base';
import AboutServiceFull from './pages/about-service/about-service-full/about-service-full';
import Profile from './pages/profile/profile';
import Results from './pages/results/results';

import QuestionBlockOne from "./pages/checklist/site-content/blocks/question-block-1";
import QuestionBlockTwo from "./pages/checklist/site-content/blocks/question-block-2";
import QuestionBlockThree from "./pages/checklist/site-content/blocks/question-block-3";
import QuestionBlockFour from "./pages/checklist/site-content/blocks/question-block-4";
import QuestionBlockFive from "./pages/checklist/site-content/blocks/question-block-5";


function App() {
  return (
    <Router>
        <div className="App">
            <Route path="/" exact component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/about-service-base" component={AboutServiceBase} />
            <Route path="/about-service-full" component={AboutServiceFull} />
            <Route path="/profile" component={Profile} />
            <Route path="/results" component={Results} />
            <Route path="/checklist-block-1" component={QuestionBlockOne} />
                <Route path="/checklist-block-2" component={QuestionBlockTwo} />
                <Route path="/checklist-block-3" component={QuestionBlockThree} />
                <Route path="/checklist-block-4" component={QuestionBlockFour} />
                <Route path="/checklist-block-5" component={QuestionBlockFive} />
        </div>
    </Router>
  );
}

export default App;