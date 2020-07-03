// import React, { Fragment } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import PrimeraApp, { Respuesta } from './PrimeraApp';

// const hola = <PrimeraApp />;

const saludoPadre = (
    // like Fragment
    <>
        <PrimeraApp saludo="Hola soy una prop"/>
        <Respuesta respuesta="que tal..respuesta como prop"/>
    </>
)

ReactDOM.render(saludoPadre, document.querySelector('#root'));
