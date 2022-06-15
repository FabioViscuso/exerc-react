import { useState, useEffect } from 'react';

function Counter({ initialValue = 0, increment = 1, onCounterChange }) {
    const [counter, updateCounter] = useState(initialValue);

    useEffect(() => {
        onCounterChange(counter);
    }, [counter, onCounterChange])

    function addCounterHandler() {
        updateCounter((counter) => { return counter = counter + increment })
    }

    function resetCounterHandler() {
        updateCounter((counter) => counter = initialValue)
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={addCounterHandler}>Add by {increment}</button>
            <button onClick={resetCounterHandler}>Reset Counter</button>
        </>
    )
}

export default Counter;