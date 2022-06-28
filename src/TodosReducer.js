const defaultState = []

const ADD_TODO = 'TODOS@ADD';
const REMOVE_TODO = 'TODOS@REMOVE'
const EDIT_TODO = 'TODOS@EDIT'

export function addTodo(user = { id: defaultState.length, title: '', completed: false }) {
    return {
        type: ADD_TODO,
        payload: user
    }
}

export function removeTodo(id = defaultState.length) {
    return {
        type: REMOVE_TODO,
        payload: { id }
    }
}

export function editTodo(id = defaultState.length, data = { title: '', completed: false }) {
    return {
        type: EDIT_TODO,
        payload: { id: id, data }
    }
}

export function todoReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO: {return [...state, action.payload]}
        case REMOVE_TODO: {return state.filter(user => user.id !== action.payload)}
        case EDIT_TODO: {return state.map(user => {
            if (user.id === action.payload.id) {
                return {...user, ...action.payload.data}
            } else {
                return user
            }
        })}
        default: {return state}
    }
}