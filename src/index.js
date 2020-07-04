// import React, { Fragment } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';


ReactDOM.render(<CounterApp value={123}/>, document.querySelector('#root'));
