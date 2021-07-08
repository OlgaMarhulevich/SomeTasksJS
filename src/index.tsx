import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {sum} from "./03/03";

const res = sum(1,3)

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
