import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import PrimeraApp, { Respuesta } from './PrimeraApp';

// const hola = <PrimeraApp />;

const saludo = (
    <div>
        <PrimeraApp />
        <Respuesta />
    </div>
)

ReactDOM.render(saludo, document.querySelector('#root'));
