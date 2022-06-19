import { useState } from "react";
import { useCallback } from "react";

export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)

    const incrementCounter = useCallback(() => {
        setCounter(counter => counter + 1)
    }, [])

    const decrementCounter = useCallback(() => {
        setCounter(counter => counter - 1)
    }, [])

    const resetCounterHandler = useCallback(() => {
        setCounter(initialValue)
    }, [initialValue])

    return {
        counter: counter,
        onReset: resetCounterHandler,
        onIncrement: incrementCounter,
        onDecrement: decrementCounter
    }
}