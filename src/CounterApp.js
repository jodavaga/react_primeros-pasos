import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(10);

    // click event
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h4> {counter} </h4>

            {/* <button onClick={ (e) => handleAdd(e) }> +1 </button> */}
            <button onClick={ handleAdd }> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



export default CounterApp;