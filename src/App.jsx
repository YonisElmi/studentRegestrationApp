import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Header />
      <Home/>
      <About/>
      
    </Router>
  );
}

export default App;
