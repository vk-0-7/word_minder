import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// const wbm = require('wbm');

const root = ReactDOM.createRoot(document.getElementById('root'));

// wbm.start().then(async () => {
//   const phones = ['9608945441', '8678037937'];
//   const message = 'Good Morning.';
//   await wbm.send(phones, message);
//   await wbm.end();
// }).catch(err => console.log(err));

root.render(
  <BrowserRouter>
    <App />
  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
