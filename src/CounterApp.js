import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

<<<<<<< HEAD
    const [counter, setCounter] = useState(10);
=======
    const [counter, setCounter] = useState(value);
>>>>>>> 0025e75... create and set counter state using hooks

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