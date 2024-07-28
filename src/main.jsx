import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StudentProvider } from './contexts/StudentContext';

ReactDOM.render(
  <StudentProvider>
    <App />
  </StudentProvider>,
  document.getElementById('root')
);
