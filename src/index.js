// import React, { Fragment } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import PrimeraApp, { Respuesta } from './PrimeraApp';

// const hola = <PrimeraApp />;

const saludo = (
    // like Fragment
    <>
        <PrimeraApp />
        <Respuesta />
    </>
)

ReactDOM.render(saludo, document.querySelector('#root'));
