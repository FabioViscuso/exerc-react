import { useState, useEffect } from 'react';

function Counter() {
    const [counter, updateCounter] = useState(0);

    const intervalID = () => {
        setInterval(() => {
            updateCounter(counter => counter + 1)
        }, 1000);
    }

    useEffect(() => {
        intervalID()
        console.log('Mounting...')

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    useEffect(() => {
        return () => {
            console.log('Unmounting...')
            clearInterval(intervalID)
        }
    })

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