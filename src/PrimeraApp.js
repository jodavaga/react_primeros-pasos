import React from 'react';
import PropTypes from 'prop-types';

// Functional component

const PrimeraApp = ({ saludo }) => {

    // if (!saludo) {
    //     throw new Error('Saludo es necesario');
    // }


    return(
        <>
            <h1>{ saludo }</h1>
            <small> Mi primera aplicacion</small>
        </>    
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export {
    PrimeraApp as default
}