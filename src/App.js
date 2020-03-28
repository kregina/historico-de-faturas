import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './index.css';

import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
  </Router>
);
export default App;
