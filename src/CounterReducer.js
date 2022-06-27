const defaultState = 0;

const INCREMENT = 'COUNTER@INCREMENT'
const DECREMENT = 'COUNTER@DECREMENT'
const RESET = 'COUNTER@RESET'

export function counterIncrement() {
    return {
        type: INCREMENT
    }
}

export function counterDecrement() {
    return {
        type: DECREMENT
    }
}

export function counterReset() {
    return {
        type: RESET
    }
}