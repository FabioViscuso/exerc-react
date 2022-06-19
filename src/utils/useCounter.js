import { useState } from "react";

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    function incrementCounter() {
        setCounter(counter => counter + 1)
    }

    function decrementCounter() {
        setCounter(counter => counter - 1)
    }

    function resetCounterHandler() {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onReset: resetCounterHandler,
        onIncrement: incrementCounter,
        onDecrement: decrementCounter
    }
}