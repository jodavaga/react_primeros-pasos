import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    // click event
    const handleAdd = (event) => {
        event.persist();
        
        console.log(event);
        const evetType = event.type;

        // Event Pooling - https://es.reactjs.org/docs/events.html#event-pooling
        setTimeout(() => {
            console.warn(evetType);
            console.log(event);
        }, 1000);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h4> {value} </h4>

            {/* <button onClick={ (e) => handleAdd(e) }> +1 </button> */}
            <button onClick={ handleAdd }> +1 </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



export default CounterApp;