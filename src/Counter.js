import { useState, useEffect } from 'react';

function Counter() {
    const [counter, updateCounter] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateCounter(counter => counter + 1)
        }, 1000);
        console.log(counter)

        return () => {
            clearInterval(intervalID)
        }

    }, [counter])

    function resetCounterHandler() {
        updateCounter(counter => counter = 0)
    }

    return (
        <>
            <p>{counter}</p>
            <button onClick={resetCounterHandler}>Clear counter</button>
        </>
    )
}

export default Counter;