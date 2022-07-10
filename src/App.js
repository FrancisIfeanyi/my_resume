import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import Skills from './components/Skills';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';

function App() {
  
  return (
    <Router>
      <>
      <Route exact path='/' component={Home} />
      <Switch>
        <Route path="/skills" element={<Skills/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
