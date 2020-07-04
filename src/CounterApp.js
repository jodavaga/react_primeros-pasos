import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    return (
        <>
            <h1>Counter App</h1>
            <h4> {value} </h4>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



export default CounterApp;