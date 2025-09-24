/**
 * Entry point for the React application.
 *
 * This file sets up the root React component and renders it into the DOM.
 * It uses React.StrictMode for development warnings and error detection.
 * The App component is the main component that contains the entire application.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);