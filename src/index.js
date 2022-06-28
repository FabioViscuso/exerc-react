import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import {store} from './Store'
import {counterIncrement, counterDecrement, counterReset} from './CounterReducer'
import {addTodo, removeTodo, editTodo} from './TodosReducer'

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); */

/* subscribed to the store since redux-02 */
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(counterIncrement());
store.dispatch(counterIncrement());
store.dispatch(counterDecrement());
store.dispatch(counterIncrement());
store.dispatch(counterReset());
store.dispatch(counterIncrement());

store.dispatch(addTodo());
store.dispatch(removeTodo());
store.dispatch(addTodo({id: 2, title: 'study Redux', completed: false}))
store.dispatch(editTodo(2, {completed: true}))
