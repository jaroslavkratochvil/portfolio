// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Navigation from './components/Navigation';
import LeftColumnContent from './components/LeftColumnContent';
import './App.css';

function App() {
  return (
    <Router>
      
      <div className="container">
        <div className="left-column">
          <div className="left-column-content">
            <LeftColumnContent/>
          </div>
        </div>
        
        <div className="right-column">
          
          {/* Language selection - currently disabled until I manage how to make it work */}
          {/* <Dropdown /> */}

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </Router>
  );
}

export default App;
