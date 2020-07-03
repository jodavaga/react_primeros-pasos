import React from 'react';

// Functional component

const PrimeraApp = () => {
    
    // const saludo = 'Hola mundo desde const';
    const saludo = {
        nombre: 'Jose',
        edad: 30
    };

    return(
        <h1>{ JSON.stringify(saludo, null, 3) }</h1>
    )
}

const Respuesta = () => {
    return(
        <h2>Que tal..</h2>
    )
}

export {
    PrimeraApp as default,
    Respuesta
}