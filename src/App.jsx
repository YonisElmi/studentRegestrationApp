import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Header />
      <Home/>
      
    </Router>
  );
}

export default App;
