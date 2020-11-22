import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from '../src/state-drills/HelloWorld';
import TheDate from '../src/state/TheDate';

ReactDOM.render(
  <React.StrictMode>
     <App /> 
    {/* <HelloWorld/> */}
    <TheDate/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
