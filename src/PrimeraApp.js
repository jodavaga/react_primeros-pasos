import React from 'react';

// Functional component

const PrimeraApp = ({saludo = 'Hola mundo'}) => {
    
    // const saludo = 'Hola mundo desde const';
    const obj = {
        nombre: 'Jose',
        edad: 30
    };

    return(
        <>
            <pre>{ JSON.stringify(obj, null, 3) }</pre>
            <h2>{ saludo }</h2>
        </>    
    )
}

const Respuesta = ({ respuesta }) => {
    return(
        <h3>{ respuesta }</h3>
    )
}

export {
    PrimeraApp as default,
    Respuesta
}