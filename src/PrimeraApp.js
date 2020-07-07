import React from 'react';
import PropTypes from 'prop-types';

// Functional component

const PrimeraApp = ({ saludo, subtitulo }) => {

    return(
        <>
            <h1>{ saludo }</h1>
            <small>{subtitulo }</small>
        </>    
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
}

PrimeraApp.defaultProps = {
    subtitulo: 'Subtitulo by default prop'
}

export {
    PrimeraApp as default
}