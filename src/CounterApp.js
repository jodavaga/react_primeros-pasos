import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);

    // click event
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const resetCounter = () => {
        setCounter(value);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h4>{counter}</h4>

            {/* <button onClick={ (e) => handleAdd(e) }> +1 </button> */}
            <button onClick={ handleAdd }> +1 </button>
            {/* <button onClick={ () => setCounter(value) }> Reset </button>
            <button onClick={ () => setCounter(counter - 1) }> -1 </button> */}

            <button onClick={ resetCounter }> Reset </button>
            <button onClick={ handleSubstract }> -1 </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 10
}



export default CounterApp;