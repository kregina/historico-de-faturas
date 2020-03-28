import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './index.css';

import Navigation from './components/Navigation';
import Carousel from './components/Carousel';

const App = () => (
  <Router>
    <Navigation />
    <Carousel />
  </Router>
);
export default App;
