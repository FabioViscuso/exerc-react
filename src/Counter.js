import { useCounter } from './utils/useCounter'

function Counter({ initialValue = 0 }) {
    const { counter,
        onReset,
        onIncrement,
        onDecrement } = useCounter(initialValue)


    return (
        <>
            <p>Current value: {counter}</p>
            <button onClick={onIncrement}>Increment counter</button>
            <button onClick={onDecrement}>Decrement counter</button>
            <button onClick={onReset}>Reset counter</button>
        </>
    )
}

export default Counter;