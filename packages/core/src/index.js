import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createRcsDva from './Dva';

window.RMS = {};

const root = ReactDOM.createRoot(document.getElementById('root'));

const DvaProvider = createRcsDva({});

root.render(
  <DvaProvider>
    <App />
  </DvaProvider>
);
